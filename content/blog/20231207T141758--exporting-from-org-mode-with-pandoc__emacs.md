+++
title = "exporting from org mode with pandoc"
author = ["mahmood"]
tags = ["emacs"]
draft = false
+++

## motivation {#motivation}

the need for an emacs-independent exporting of notes arose from the fact that i was using org version 9.7-pre in which exporting functionality is basically broken. <br/>


## pandoc {#pandoc}

because i didnt want to reinvent the wheel, i landed on using pandoc, it has a huge community and i trust it to maintain org-mode parsability in the long run. there are some missing features in pandoc exporting which is why im writing this. <br/>
a starting point would be the following command: <br/>

```sh
pandoc infile.org --standalone --output outfile.html
```


## custom css {#custom-css}

if you have a css file that you'd like included, use the `--css` argument <br/>

```sh
pandoc infile.org\
       --standalone\
       --output outfile.html\
       --css style.css
```


## custom html preamble/postamble {#custom-html-preamble-postamble}

or more generally, if you have an html file you'd like included in the header, use the `--include-in-header` argument <br/>

```sh
pandoc infile.org\
       --standalone\
       --output outfile.html\
       --css style.css\
       --include-in-header=header.html
```


## bibliography {#bibliography}

if you have a bibliography file you want pandoc to use to handle citations, you can make use of the `--bibliography`, `--biblatex`, `--citeproc` arguments <br/>

```sh
pandoc infile.org\
       --standalone\
       --include-in-header=header.html\
       --output outfile.html\
       --css style.css\
       --bibliography=mybibfile.bib --biblatex --citeproc
```


## latex rendering {#latex-rendering}

pandoc supports multiple ways of handling latex snippets, it can use `mathjax` with the `--mathjax` argument, a better option for full latex support is rendering them with `dvisvgm`, using this lua filter that makes use of pandoc's filter api, which is a modified version of <https://github.com/oltolm/pandoc-latex-math> <br/>

```lua
--- source: https://github.com/oltolm/pandoc-latex-math

local system = require("pandoc.system")

function appendDepthToSVGFile(depth, svgPath)
    local f = io.open(svgPath, "a")
    f:write(string.format("<!-- depth=%spt -->\n", depth))
    f:close()
end

function NewLatexRender()
    return {
        preamble = [[
            \usepackage{amsmath}
            \usepackage{amsfonts}
            \usepackage{amssymb}
            \usepackage[T2A,T1]{fontenc}
            \usepackage{colordvi}
            \usepackage[active,tightpage]{preview}
        ]],
        latexClass = "article",
        fontEncoding = "utf8",
        fontSize = 12,
        bgcolor = "#FFFFFF",
        latexPath = "latex",
        dvisvgmPath = "dvisvgm"
    }
end

function html2rgb(color)
    return ''
end

function wrapFormula(lr, latexFormula)
    local bgcolor = lr.bgcolor ~= "#FFFFFF" and string.format("\\background{%s}\n", html2rgb(lr.bgcolor)) or ''
    local tex = string.format([[\documentclass[%dpt]{%s}
        \usepackage[%s]{inputenc}
        %s
        \begin{document}
        %s
        \begin{preview}
        %s
        \end{preview}
        \end{document}
        ]], lr.fontSize, lr.latexClass, lr.fontEncoding, lr.preamble, bgcolor, latexFormula)
    -- io.write(string.format("tex: [[%s]]\n", tex))
    return tex
end

function getDepth(out)
    local depth = string.match(out, "depth=(%d*%.?%d*)")
    return tonumber(depth)
end

function renderLatex(lr, latexFormula)
    local latexDocument = wrapFormula(lr, latexFormula)
    local currDir = system.get_working_directory()
    local svgFileName = pandoc.sha1(latexDocument) .. ".svg"
    local svgPath = currDir .. "/" .. svgFileName
    local f = io.open(svgPath, "r")
    if f ~= nil then
        local depth = getDepth(f:read("a"))
        f:close()
        --io.write(string.format("found SVG file=%s with depth=%spt\n", svgPath, depth))
        return depth, svgFileName
    end
    -- SVG file does not exist
    local depth = system.with_temporary_directory("latexmath", function(tmpDir)
        return system.with_working_directory(tmpDir, function()
            io.write(string.format("changed directory to (%s)\n", tmpDir))
            local tmpFile = io.open("latexmath.tex", "w")
            tmpFile:write(latexDocument)
            tmpFile:close()
            local out = command(lr, svgPath)
            local depth = getDepth(out)
            if depth == nil then
                io.write(string.format("%s: depth not found\n", svgPath))
                return nil
            end
            io.write(string.format("%s: depth=%spt\n", svgPath, depth))
            appendDepthToSVGFile(depth, svgPath)
            return depth
        end)
    end)
    return depth, svgFileName
end

function command(lr, svgPath)
    pandoc.pipe(lr.latexPath, {"--interaction=nonstopmode", "latexmath.tex"}, '')
    -- local out = pandoc.pipe(lr.dvisvgmPath, {"--no-fonts", "-o", svgPath, "latexmath.dvi"}, '')
    local f = io.popen(lr.dvisvgmPath .. " --no-fonts -o \"" .. svgPath .. "\" latexmath.dvi 2>&1")
    local out = f:read("a")
    f:close()
    -- io.write(string.format("out: [[%s]]\n", out))
    return out
end

function Math(elem)
    local latexFormula1
    local latexFormula = elem.text
    if elem.mathtype == "InlineMath" then
        latexFormula1 = string.format("\\(%s\\)", latexFormula)
    else
        -- DisplayMath
        latexFormula1 = string.format("\\[%s\\]", latexFormula)
    end
    local lr = NewLatexRender()
    local depth, svgFileName = renderLatex(lr, latexFormula1)
    local attr = {
        alt = latexFormula
    }
    if depth ~= nil then
        attr["style"] = string.format("vertical-align:-%spt", depth)
    end
    -- io.write(string.format("%s\n", dump(attr)))
    return pandoc.Image('', svgFileName, '', attr)
end

function dump(o)
    if type(o) == 'table' then
        local s = '{ '
        for k, v in pairs(o) do
            if type(k) ~= 'number' then
                k = '"' .. k .. '"'
            end
            s = s .. '[' .. k .. '] = ' .. dump(v) .. ','
        end
        return s .. '} '
    else
        return tostring(o)
    end
end
```

assuming this script is written in a file `tex.lua`, to use this filter, our command becomes: <br/>

```sh
pandoc infile.org\
       --standalone\
       --include-in-header=header.html\
       --output outfile.html\
       --css style.css\
       --bibliography=mybibfile.bib --biblatex --citeproc\
       --lua-filter tex.lua
```


## internal links {#internal-links}

consider the following org mode snippet: <br/>

```org
#+name: my-def
#+begin_definition
we define a set \(A\) to be any unordered collection of objects
#+end_definition

by [[my-def][this definition]], the object {1,2,3} is a set.
```

although pandoc does expectedly render the definition block as a div with class `definition`, the link `[[my-def][this definition]]` doesnt get rendered properly by pandoc, neither does the `#+name` property. <br/>
after some messing around, i found that pandoc does handle the `attr_html` property of org blocks properly, e.g. <br/>

```org
#+attr_html: :id my-def
#+begin_definition
we define a set \(A\) to be any unordered collection of objects
#+end_definition

by [[my-def][this definition]], the object {1,2,3} is a set.
```

results in the definition div having the id `my-def`, but we wouldnt want to modify our org files just to make them compatible with pandoc, instead we can do something "hacky" by modifying the stream before piping it into pandoc <br/>

```sh
sed 's/#+name:/#+attr_html: :id/' infile.org |\
    pandoc --from org\
           --to html5\
           --standalone\
           --include-in-header=header.html\
           --output outfile.html\
           --css style.css\
           --bibliography=mybibfile.bib --biblatex --citeproc\
           --lua-filter tex.lua
```

this way, the `#+name` property of the block becomes the `id` of its corresponding html block, but this still doesnt fix the link issue, since links get rendered as `span`'s and not proper links, to fix this we can use the following lua filter: <br/>

```lua
function Span(span)
  -- print(dump(elem))
  if span.classes:includes 'spurious-link' then
    local content = span.content[1].content
    local target = span.attributes.target
    return pandoc.Link(content, '#' .. target)
  end
end
```

assuming this code is placed in the file `internal_links.lua`, our shell command becomes: <br/>

```sh
sed 's/#+name:/#+attr_html: :id/' infile.org |\
    pandoc --from org\
           --to html5\
           --standalone\
           --include-in-header=header.html\
           --output outfile.html\
           --css style.css\
           --bibliography=mybibfile.bib --biblatex --citeproc\
           --lua-filter tex.lua\
           --lua-filter internal_links.lua
```


## org-roam links {#org-roam-links}

pandoc on its own has no context of org-roam links, but org-roam stores everything it needs to operate in `~/.emacs.d/org-roam.db`, this file is automatically updated if the option `org-roam-db-autosync-mode` is set to `t`, this way other programs can be used to query information from org-roam without needing to visit the org files themselves. <br/>
based on this fact the following filter that is a modified version of <https://www.amoradi.org/20210730173543.html> is used: <br/>

```python
#!/usr/bin/env python3.10

# source: https://www.amoradi.org/20210730173543.html

import panflute as pf
import sqlite3
import pathlib
import sys
import os
import pprint
import urllib

ORG_ROAM_DB_PATH = "~/.emacs.d/org-roam.db"

db = None

def sanitize_link(elem, doc):
    if type(elem) != pf.Link:
        return None

    if not elem.url.startswith("id:"):
        return None

    file_id = elem.url.split(":")[1]

    cur = db.cursor()
    cur.execute(f"select id, file, title from nodes where id = '\"{file_id}\"';")
    data = cur.fetchone()

    # data contains string that are quoted, we need to remove the quotes
    file_id = data[0][1:-1]
    file_name = urllib.parse.quote(os.path.splitext(os.path.basename(data[1][1:-1]))[0])

    elem.url = f"{file_name}.html"
    return elem

def main(doc=None):
    return pf.run_filter(sanitize_link, doc=doc)

if __name__ == "__main__":
    db = sqlite3.connect(os.path.expanduser(ORG_ROAM_DB_PATH))
    main()
```

assuming the `panflute` python package is installed globally, and that this snippet is placed in the file `roam_links.py`, our exporting shell command becomes: <br/>

```sh
sed 's/#+name:/#+attr_html: :id/' infile.org |\
    pandoc --from org\
           --to html5\
           --standalone\
           --include-in-header=header.html\
           --output outfile.html\
           --css style.css\
           --bibliography=mybibfile.bib --biblatex --citeproc\
           --lua-filter tex.lua\
           --lua-filter internal_links.lua\
           --filter roam_links.py
```


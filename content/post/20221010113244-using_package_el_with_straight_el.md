+++
title = "using package.el with straight.el"
author = ["user"]
date = 2022-10-10T11:38:00+03:00
draft = false
+++

i was using `straight.el` for all my package management until i had enough of having bugs in [org mode]({{< relref "emacs.md#org-mode" >}}) because straight.el fetches the most recent versions of packages <br/>
so i decided to use the builtin `package.el` package manager with the `use-package` macro as the default package management solution and `straight.el` for packages that arent available for straight.el, e.g. github packages <br/>


## straight.el snippet {#straight-dot-el-snippet}

```emacs-lisp
;; setup straight.el package manager
(defvar bootstrap-version)
(let ((bootstrap-file
       (expand-file-name "straight/repos/straight.el/bootstrap.el" user-emacs-directory))
      (bootstrap-version 5))
  (unless (file-exists-p bootstrap-file)
    (with-current-buffer
        (url-retrieve-synchronously
         "https://raw.githubusercontent.com/raxod502/straight.el/develop/install.el"
         'silent 'inhibit-cookies)
      (goto-char (point-max))
      (eval-print-last-sexp)))
  (load bootstrap-file nil 'nomessage))
(setq ;; package-enable-at-startup nil
      ;; straight-use-package-by-default t
      native-comp-async-report-warnings-errors nil)
```

to install a package from github with straight.el simply use: <br/>

```emacs-lisp
(use-package icicles
  :straight (:repo "emacsmirror/icicles" :host github))
```


## package.el snippet {#package-dot-el-snippet}

```emacs-lisp
(require 'package)
(add-to-list 'package-archives '("gnu"   . "https://elpa.gnu.org/packages/"))
(add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/"))
(package-initialize)
(unless (package-installed-p 'use-package)
  (package-refresh-contents)
  (package-install 'use-package))
(eval-and-compile
  (setq use-package-always-ensure t
        use-package-expand-minimally t))
(require 'use-package)
```

to install a package with package.el simply use: <br/>

```emacs-lisp
(use-package org-modern) 
```


+++
title = "dictionary in emacs"
author = ["mahmood"]
date = 2024-02-26T00:00:00+02:00
tags = ["emacs"]
draft = false
+++

emacs can lookup words in dictionaries, the simplest usage is through the function `dictionary-search` and confirming with `y` when emacs asks you whether to use `dict.org` (the website), i have this bound as a key: <br/>

```emacs-lisp
(general-define-key :states '(normal motion) :keymaps 'override "SPC s a" 'dictionary-search)
```

you can also force it to use `dict.org` without confirmation: <br/>

```emacs-lisp
(setq dictionary-server "dict.org")
```

or if you want to run a local dictionary server, on arch linux you'd need: <br/>

```bash
sudo pacman -S dictd
yay -S dict-gcide dict-wn dict-moby-thesaurus # dicts only available in aur
sudo systemctl enable dictd
```

and just use `dictionary-search`, it works with no need for further configuration.


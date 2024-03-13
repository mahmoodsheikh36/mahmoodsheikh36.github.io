+++
title = "connect to remote common lisp repl with sly/slime"
author = ["mahmood"]
date = 2023-06-14T17:21:00+03:00
tags = ["codde"]
draft = false
+++

assuming `sbcl` is installed on the destination server and the one to be used <br/>

-   start by installing [quicklisp](20230224T163920--common-lisp__code_language.org) on the server <br/>
-   start the sbcl repl <br/>
-   install slynk/swank for sly/slime, respectively, `(ql:quickload :slynk)` <br/>
-   start the server with `(slynk:create-server)`, the default port is 4005 <br/>
-   create an ssh tunnel from local machine to remote machine using `ssh -L4005:localhost:4005 <remote-machine-address>` <br/>
-   connect from the local emacs instance to the remote common lisp swank instance using `M-x sly-connect`, with the destination being the server and the port being 4005 <br/>

note that direct remote connections to swank/slynk arent possible (by default) so we have to use an ssh tunnel (see <https://comp.lang.lisp.narkive.com/ze9FYwCl/how-to-connect-with-slime-to-remote-sbcl>) <br/>
a one-liner to start the slynk server: <br/>

```sh
sbcl --eval '(ql:quickload :slynk)' --eval '(slynk:create-server)'
```


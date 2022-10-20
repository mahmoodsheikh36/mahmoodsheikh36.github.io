+++
title = "trackify systemd service"
author = ["user"]
description = "a simple systemd service for trackify"
date = 2022-10-20T17:29:00+03:00
draft = false
+++

a simple systemd service for [trackify]({{< relref "20220703162337-trackify.md" >}}) that goes into `/etc/systemd/system/trackify.service`: <br/>

```C
[Unit]
Description=trackify service
After=network.target

[Service]
Type=simple
Restart=always
RestartSec=1
User=mahmooz
WorkingDirectory=/home/mahmooz/trackify/
ExecStart=/usr/bin/gunicorn --workers 3 --pid /tmp/trackify.pid --log-file /tmp/trackify.log --bind unix:app.sock trackify.webapp:web_application

[Install]
WantedBy=multi-user.target
```


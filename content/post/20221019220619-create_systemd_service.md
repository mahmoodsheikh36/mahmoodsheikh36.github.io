+++
title = "trackify systemd service"
author = ["user"]
description = "a simple systemd service for trackify"
date = 2022-10-19T22:15:00+03:00
draft = false
+++

a simple systemd service for [trackify]({{< relref "20220703162337-trackify.md" >}}) that goes into `/etc/systemd/system/myservice.service`: <br/>

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
ExecStart=/usr/bin/gunicorn -c gunicorn.conf --bind unix:app.sock trackify.webapp:web_application

[Install]
WantedBy=multi-user.target
```


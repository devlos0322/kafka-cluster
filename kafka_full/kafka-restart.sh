#!/usr/bin/env bash

/usr/local/bin/docker-compose stop kafka1 kafka2 kafka3 && /usr/local/bin/docker-compose up -d kafka1 kafka2 kafka3

#!/bin/bash

rm -rf /usr/share/nginx/html
cp -rf /docker_volumes/html /usr/share/nginx/html

nginx -g 'daemon off;'
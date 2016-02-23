FROM centos:latest

#creates a folder called docker_volumes at the root of centos
RUN mkdir /docker_volumes

#Copies 'node_server' folder on host to path on the soon to be container
COPY node_server /docker_volumes/node_server

#Tags this folder as holding externally mounted volumes which other containers can use
VOLUME /docker_volumes

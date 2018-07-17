# docker
How to Execute Firefox using X

- To build the image, in the same folder where Dockerfile was created:
docker build -t firefox .

- after build the Docker images, just type:
docker run -ti --rm -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix firefox




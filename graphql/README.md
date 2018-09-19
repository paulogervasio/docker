
## clone this repo


### build image
docker build -t paulogervasio:graphql .


### run container
docker run -ti --privileged  -v `pwd`/assets:/graphql -p 4000:4000 paulogervasio1:graphql nodemon /graphql/server.js


## Wow! now your terminal is locked...  use CTRL+pq to detach the container and release console

### have fun!


## clone this repo


### build image
docker build -t paulogervasio:graphql .


### run container
docker run -ti --privileged  -v `pwd`/assets:/graphql -p 4000:4000 paulogeasio:graphql nodemon /graphql/server.js

### have fun!

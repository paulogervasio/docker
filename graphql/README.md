
## clone this repo


### build image
docker build -t paulogervasio:graphql .


### run container
docker run -ti  -v `pwd`/assets:/graphql -p 4000:4000 paulogervasio:graphql1 node /graphql/server.js


### have fun!

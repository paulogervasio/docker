
## GraphQL Docker enviroment for real-time development

This project pretends to be used run GraphQL apps running in debug mode using Docker.

####How:
Choose a folder in your host that will be used for Docker to build the GraphQL app.
Keep the GraphQL source files in your Docker host, it possible to use your favorite nodejs IDE to analyse, produce and debug the javascript code.


####Instructions:

### Download the source files: 
`git clone https://github.com/paulogervasio/docke:wr`

navigate to graphql folder
`cd graphql`


### Build image
`docker build -t paulogervasio:graphql .`


### run container
`docker run -ti --privileged  -v `pwd`/assets:/graphql -p 4000:4000 paulogervasio1:graphql nodemon /graphql/server.js`


#### Wow! now your terminal is locked...  But you use CTRL+pq to detach the container and release console

#### have fun!

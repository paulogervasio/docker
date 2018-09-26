
## Developing GraphQL using Docker

This project pretends to be used to build GraphQL apps running in <b><u>debug mode</u></b> using Docker.


### How:
Choose a folder in your host that will be used for Docker to build the GraphQL app.

Keep GraphQL source files in your Docker host, its possible use your favorite node IDE editor to analyse, produce and debug the javascript code.



### Instructions:

#### 1) Download source files: 
`git clone https://github.com/paulogervasio/docke:wr`

#### 2) Navigate to graphql folder
`cd graphql`


#### 3) Build image
`docker build -t paulogervasio:graphql .`


#### 4) Run container
```docker run -ti --privileged  -v `pwd`/assets:/graphql -p 4000:4000 paulogervasio:graphql nodemon /graphql/server.js```


##### Wow! now your terminal is locked...  But you can use CTRL+pq to detach the container and release console

#### 5) Have fun!

from ubuntu

RUN apt-get update
RUN apt-get -y install net-tools
#RUN apt-get -y install iputils-ping
#RUN apt-get -y install curl
RUN apt-get -y install vim
RUN apt-get -y install nodejs
RUN apt-get -y install npm

RUN npm install --save express
RUN npm install --save express-graphql

#WORKDIR /graphql
#RUN node server.js

#ENTRYPOINT ["/usr/bin/node", "/graphql/server.js"]
EXPOSE 4000

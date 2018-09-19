from ubuntu

RUN apt-get update
RUN apt-get -y install net-tools
RUN apt-get -y install vim
RUN apt-get -y install nodejs
RUN apt-get -y install npm


RUN npm install --save graphql@^0.10.0 \
express \
express-graphql

RUN npm install -g nodemon
#RUN echo fs.inotify.max_user_watches=582222 | tee -a /etc/sysctl.conf && sysctl -p

COPY "./assets/sysctl.conf" "/etc/sysctl.conf"

EXPOSE 4000

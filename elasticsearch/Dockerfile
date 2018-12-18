from ubuntu

RUN apt-get -y update
RUN apt-get -y install wget
RUN apt-get -y install gnupg2

RUN wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | apt-key add -


RUN apt-get -y install apt-transport-https



RUN echo "deb https://artifacts.elastic.co/packages/6.x/apt stable main" | tee -a /etc/apt/sources.list.d/elastic-6.x.list


RUN echo "####### OpenJDk #######"

RUN apt-get -y install software-properties-common
RUN add-apt-repository -y ppa:openjdk-r/ppa
RUN apt-get -y install openjdk-8-jdk

###########################


RUN echo "### Net Tools ############"

RUN apt-get -y install curl
RUN apt-get -y install net-tools
RUN apt-get -y install vim

###########################



RUN echo "## Install effectively ###########################"

RUN apt-get -y update && apt-get -y install elasticsearch

###########################



### change to elasticsearch user#####

RUN chown elasticsearch -R /var/log/elasticsearch/

###########################
#docker exec -it --user elasticsearch 54fd86f48d61  bash
###########################
RUN echo "network.host: 0.0.0.0" >> /etc/elasticsearch/elasticsearch.yml

USER elasticsearch
####

##### Init Elasticsearch
WORKDIR /usr/share/elasticsearch/bin/
CMD ["/bin/bash", "elasticsearch"]

EXPOSE 9200

#docker run -ti -p9200:9200 -p9300:9300 paulogervasio:elasticsearch


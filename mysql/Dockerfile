FROM alpine:3.1
RUN apk --update add mysql mysql-client && rm -rf /var/cache/apk/*
RUN mysql_install_db --user=mysql -ldata=/var/lib/mysql
ADD config.sql /tmp/config.sql

WORKDIR "/usr"
CMD ["/usr/bin/mysqld_safe", "--init-file=/tmp/config.sql"]
EXPOSE 3306


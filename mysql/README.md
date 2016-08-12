# MySQL container

To install:

Copy files [Dockerfile](https://raw.githubusercontent.com/paulogervasio/docker/master/mysql/Dockerfile) and [config.sql](https://raw.githubusercontent.com/paulogervasio/docker/master/mysql/config.sql) to the same folder.
Now run:
```shell-script
docker build -t=paulogervasio/mysql .;

```

The mysql default root password and database grants are defined in config.sql file. 
To start the container:

```shell-script
docker run -ti -d -p 3306:3306 paulogervasio/mysql;
``` 

After install mysql-client just run:
```shell-script
mysql -u root -h localhost -p;
```

And Enjoy!


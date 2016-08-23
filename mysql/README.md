# MySQL container

To install:

Copy files [Dockerfile](https://raw.githubusercontent.com/paulogervasio/docker/master/mysql/Dockerfile) and [config.sql](https://raw.githubusercontent.com/paulogervasio/docker/master/mysql/config.sql) to the same folder.
Now run:
```shell-script
docker build -t=paulogervasio/mysql . ;

```

The mysql default root password and database grants are defined in config.sql file. 
To start the container:

```shell-script
docker run -ti -d -p 3306:3306 paulogervasio/mysql;
``` 

After install mysql-client just run:
```shell-script
mysql -u root -h <YOUR_IP or HOSTNAME> -p;
```



Add-on
------------------------------------------------------------------------------
To execute a container alredy created:

1) get the container name:
```
docker ps -a
```
Get containerId provided by command above and run:

```
docker start <containerId>
docker exec -ti 66256b6c01f4 -d -p 3306:3306;
```




And Enjoy!


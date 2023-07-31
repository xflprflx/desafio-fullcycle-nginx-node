FROM mysql:8.0
EXPOSE 3306
CMD ["--innodb-use-native-aio=0"]
COPY ./testdump.sql /docker-entrypoint-initdb.d/
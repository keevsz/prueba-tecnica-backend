# Microservicios

### clientes - puerto 3001

### emails - puerto 3002

### seguridad - puerto 3003
#

 Se utilizó docker para los contenedores de las bases de datos y rabbitmq

#### MySQL:

```
docker run -d --name mysqldb -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 mysql
```

#### Redis:

```
docker run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest
```

#### Rabbitmq:

```
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.12-management
```

- Crear base de datos de mysql con el nombre: dbprueba

- Duplicar el .env.example y renombrar uno como .env

- Instalar dependencia: ```npm install```

### Correr los diferentes microservicios:
- ```yarn dev:clients```
- ```yarn dev:security```
- ```yarn dev:emails```



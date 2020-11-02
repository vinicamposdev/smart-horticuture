- docker

```
docker run --name ps-database -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres
```

- migration

```
yarn typeorm migration:run
```

- express

[DEV]

```
yarn dev:server
```

[PROD]

```
node ~/back-smart-hort/dist/server.js
pm2 start ~/back-smart-hort/dist/server.js --name back-smart-hort-api
```

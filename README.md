## Description

This a backend to the [ModClima](https://bitbucket.org/modclima/challenge/src/master/) test.

## Used Tecnologies

- [NodeJs](https://nodejs.org/en/)
- [ExpressJs](https://expressjs.com/pt-br/)
- [Postgres](https://node-postgres.com/)
- [PostGis](https://postgis.net/)
- [Sequelize](https://sequelize.org/master/index.html)
- [WebSockets](https://github.com/websockets/ws)

## How to Run

# Star or Dev Mode

- Create a postgres database with postgis
- Create the .env file in the root directory
- Put DB_STRING_CONNECTION environment variable in the .env file
  - Format of DB_STRING_CONNECTION: postgres://<user>:<password>@<host>/<database>
  - Example: DB_STRING_CONNECTION=postgres://user:123@127.0.0.1/modclima
- Type in your terminal
  - ```bash
    yarn start
    ```

````or
  - ```bash
yarn dev
````

- Observations:
  - yarn start run with nodejs
  - yarn dev run with nodemon

# Run tests

- Create a postgres database with postgis
- Create the .env.test file in the root directory
- Put DB_STRING_CONNECTION environment variable in the .env.test file
  - Format of DB_STRING_CONNECTION: postgres://<user>:<password>@<host>/<database>
  - Example: DB_STRING_CONNECTION=postgres://user:123@127.0.0.1/modclimatest
- Type in your terminal
  - ```bash
    yarn test
    ```

```

```

## Documentation

To see the documentation run your application in start ou dev mode and access the /api-docs route

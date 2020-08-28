# Description

This a backend to the [ModClima](https://bitbucket.org/modclima/challenge/src/master/) test.

# Used Tecnologies

- [NodeJs](https://nodejs.org/en/)
- [ExpressJs](https://expressjs.com/pt-br/)
- [Postgres](https://node-postgres.com/)
- [PostGis](https://postgis.net/)
- [Sequelize](https://sequelize.org/master/index.html)
- [WebSockets](https://github.com/websockets/ws)

# How to Run

- First of all install the dependencies. You can type

```bash
  yarn install
```

to install all dependencies.

- Then you can chose from one of the run mode below.

## Star Mode

- Create a postgres database with postgis and postgis_topology
- Create the .env file in the root directory
- Put DATABASE_URL environment variable in the .env file
  - Format of DATABASE_URL: postgres://user':'password'@'host'/'database'
  - Example: DATABASE_URL=postgres://user:123@127.0.0.1/modclima
- Type in your terminal:
  ```bash
    yarn start
  ```
- Observations:

  - yarn start run with nodejs

## Dev mode

- Create a postgres database with postgis and postgis_topology
- Create the .env file in the root directory
- Put DATABASE_URL environment variable in the .env file
  - Format of DATABASE_URL: postgres://user':'password'@'host'/'database'
  - Example: DATABASE_URL=postgres://user:123@127.0.0.1/modclima
- Type in your terminal:
  ```bash
    yarn dev
  ```
- Observations:

  - yarn dev run with [nodemon](https://nodemon.io/)

## Run tests

- Create a postgres database with postgis and postgis_topology
- Create the .env.test file in the root directory
- Put DB_STRING_CONNECTION environment variable in the .env.test file
  - Format of DATABASE_URL: postgres://'user':'password'@'host'/'database'
  - Example: DATABASE_URL=postgres://user:123@127.0.0.1/modclimatest
- Type in your terminal
  ```bash
    yarn test
  ```

## Documentation

To see the documentation run your application in start ou dev mode and access the /api-docs route or access [documentation](https://modclima-backend.herokuapp.com/)

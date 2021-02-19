# Node.js - Express, MongoDB, ES2017 REST API

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Features

- Uses [yarn](https://yarnpkg.com)
- No transpilers, just vanilla javascript with ES2017 latest features like Async/Await
- Express + MongoDB ([Mongoose](http://mongoosejs.com/))
- CORS enabled and uses [helmet](https://github.com/helmetjs/helmet) to set some HTTP headers for security
- Load environment variables from .env files with [dotenv](https://github.com/rolodato/dotenv-safe)
- Request validation with [joi](https://github.com/hapijs/joi)
- Consistent coding styles with [editorconfig](http://editorconfig.org)
- Gzip compression with [compression](https://github.com/expressjs/compression)
- Linting with [eslint](http://eslint.org)
- Tests with [mocha](https://mochajs.org), [chai](http://chaijs.com) and [sinon](http://sinonjs.org)
- Code coverage with [istanbul](https://istanbul.js.org) and [coveralls](https://coveralls.io)
- Git hooks with [husky](https://github.com/typicode/husky)
- Logging with [morgan](https://github.com/expressjs/morgan)
- Authentication and Authorization with [passport](http://passportjs.org)
- API documentation geratorion with [apidoc](http://apidocjs.com)
- [Docker](https://www.docker.com/) support
- Continuous integration support with [travisCI](https://travis-ci.org)
- Monitoring with [pm2](https://github.com/Unitech/pm2)

## Prerequisites

- [Node v7.6+](https://nodejs.org/en/download/current/) or [Docker](https://www.docker.com/)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [Mongodb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows-unattended/)
- [pm2](https://www.npmjs.com/package/pm2)

## Getting Started

1. Clone the repo:

```bash
git clone https://github.com/TusharSheth/node-api.git simform
cd simform
```

2. Install dependencies:

```bash
yarn
```

3. Set environment variables:

```bash
cp .env.example .env
```

## Running Locally

```bash
yarn dev
```

## Running in Production

```bash
yarn start
```

## Lint

```bash
# lint code with ESLint
yarn lint

# try to fix ESLint errors
yarn lint:fix

# lint and watch for changes
yarn lint:watch
```

## Test

```bash
# run all tests with Mocha
yarn test

# run unit tests
yarn test:unit

# run integration tests
yarn test:integration

# run all tests and watch for changes
yarn test:watch

# open nyc test coverage reports
yarn coverage
```

## Validate

```bash
# run lint and tests
yarn validate
```

## Logs

```bash
# show logs in production
pm2 logs
```

## Documentation

```bash
# generate and open api documentation
yarn docs
```

## Docker

```bash
# run container locally
yarn docker:dev
or
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

# run container in production
yarn docker:prod
or
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up

# run tests
yarn docker:test
or
docker-compose -f docker-compose.yml -f docker-compose.test.yml up
```

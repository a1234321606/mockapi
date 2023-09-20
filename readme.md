[![codecov](https://codecov.io/gh/a1234321606/mockapi/graph/badge.svg?token=AI8nnv0m5r)](https://codecov.io/gh/a1234321606/mockapi)

# MockAPI Demo

This is a Node.js project that implements a user list API using `Koa2` and `Typescript`. The API is composed of two third-party APIs from [MockAPI.io](https://mockapi.io/) as follows:
* Get all users:\
  https://64d5e658754d3e0f13614839.mockapi.io/api/users
* Get user detail data with user ID:\
  https://64d5e658754d3e0f13614839.mockapi.io/api/user-detail/:id

## Swagger
This project includes support for a Swagger document, as shown in the following image.

![swagger.png](docs/swagger.png)

## Unit Testing
For unit testing, this project utilizes `jest` and `supertest`. The test coverage rate is illustrated in the following image.

![coverage.png](docs/coverage.png)

## Demo
Here is a [online demo](https://mockapi-59no.onrender.com/api/swagger) to try the API. Please note that this demo is deployed on [Render](https://render.com), which comes with a [limitation](https://render.com/docs/free#free-web-services). It may spin down the service after 15 minutes of inactivity, and resume service within few minutes when a request is made. So, this might result in a delay for incoming requests.

## How to Use
* Install packages: `npm i`
* Run testing: `npm test`
* Start service: `npm start`
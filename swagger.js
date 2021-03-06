const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'DOG API',
    version: '1.0.0',
    description: 'API of 왈왈왈',
  },
  host: 'localhost:3000',
  basePath: '/',
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
      bearerFormat: 'JWT',
    },
  },
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js', './routes/*.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);

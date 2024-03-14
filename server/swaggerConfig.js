const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentação da API',
      version: '1.0.0',
      description: 'Documentação da API para o teste de recrutamento',
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['./routes/routes.js'],
};

module.exports = swaggerJsdoc(options);

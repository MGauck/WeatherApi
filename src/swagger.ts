import { Express } from "express";
import { PORT } from "./constants/server.constants"

const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  swaggerDefinition: {
    restapi: '3.0.0',
    info: {
      title: 'Weather API',
      version: '1.0.0',
      description: 'Weather API',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ['**/*.ts'],
}

const specs = swaggerJsdoc(options)

const swagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}

export default swagger;
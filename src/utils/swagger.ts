import swaggerAutogen from 'swagger-autogen'

const doc = {
  info: {
    title: 'Boilerplate ExpressJS',
    description: 'Boilerplate ExpressJS',
  },
  host: 'localhost:3000',
  schemes: ['http'],
}

const outputFile = './api-docs.json'
const endpointsFiles = ['./app.ts']

swaggerAutogen(outputFile, endpointsFiles, doc)

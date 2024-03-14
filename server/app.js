const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');

const loginRouter = require('./routes/routes');

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(bodyParser.urlencoded({  extended: false }));
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', loginRouter);

const port = 3001;

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:3001");
})

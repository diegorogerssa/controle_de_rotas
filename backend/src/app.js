const express = require('express');
const app = express();
const conn = require('./db/conn');
const router = require('./routes/router');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3001', // Substitua pela porta do seu front-end, se necessário
    optionsSuccessStatus: 200 // Para compatibilidade com navegadores mais antigos
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.text());
app.use("/api", router);

conn();
app.listen(3001, () => {
    console.log('Server is running...');
});
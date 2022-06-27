const express = require('express');
const routes = express();

//Controllers
const { CreateProdutoController } = require('./controllers/produtos');

routes.get('/', (req, res) => {
    return res.status(200).json('Welcome to Jets');
});
routes.post('/produtos', CreateProdutoController);

module.exports = routes;

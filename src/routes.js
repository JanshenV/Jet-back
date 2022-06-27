const express = require('express');
const routes = express();

//Controllers
const {
    CreateProdutoController,
    EditProdutoController,
    DeleteProdutoController
} = require('./controllers/produtos');

routes.get('/', (req, res) => {
    return res.status(200).json('Welcome to Jets');
});
routes.post('/produtos', CreateProdutoController);
routes.put('/produtos/:id', EditProdutoController);
routes.delete('/produtos/:id', DeleteProdutoController);

module.exports = routes;

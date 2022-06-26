const express = require('express');
const routes = express();

//Controllers

routes.get('/', (req, res) => {
    return res.status(200).json('Welcome to Jets');
});

module.exports = routes;

//Services
const { CreateProduto } = require('../services/produtos');

//Validation
const { yupCreateProduto } = require('../validations/yupProdutos');


async function CreateProdutoController(req, res) {
    try {
        await yupCreateProduto.validate(req.body);

        const { message } = await CreateProduto(req.body);

        if (message.includes('201')) {
            return res.status(201).json();
        } else {
            return res.status(400).json({
                message
            });
        };
    } catch ({ message }) {
        return res.status(500).json({
            message
        });
    };
};

module.exports = { CreateProdutoController };
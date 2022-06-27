//Services
const {
    CreateProduto,
    EditProduto,
    DeleteProduto
} = require('../services/produtos');

//Validation
const {
    yupCreateProduto,
    yupEditProduto
} = require('../validations/yupProdutos');

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

async function EditProdutoController(req, res) {
    const { id } = req.params;
    if (!id || !(Number(id) >= 0)) return res.status(400).json({
        message: 'Id é obrigatório e há de ser um número válido.'
    });

    const reqBodyLength = Object.keys(req.body).length;

    if (reqBodyLength === 0) return res.status(400).json({
        message: 'Ao menos um campo é necessário para edição.'
    });

    try {
        await yupEditProduto.validate(req.body);

        const { produto, message } = await EditProduto(req.body, id);

        if (produto) {
            return res.status(200).json({
                produto
            });
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

async function DeleteProdutoController(req, res) {
    const { id } = req.params;
    if (!id || !(Number(id) >= 0)) return res.status(400).json({
        message: 'Id é obrigatório e há de ser um número válido.'
    });

    try {
        const { message } = await DeleteProduto(id);

        if (message.includes('deletado')) {
            return res.status(200).json({
                message
            });
        } else {
            return res.status(400).json({
                message
            });
        }
    } catch ({ message }) {
        return res.status(500).json({
            message
        });
    };
};

module.exports = {
    CreateProdutoController,
    EditProdutoController,
    DeleteProdutoController
};
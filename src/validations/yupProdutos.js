const yup = require('./yup');

const yupCreateProduto = yup.object().shape({
    nome: yup.string().required('Nome do produto é obrigatório.'),
    imagem: yup.string(),
    descricao: yup.string().max(2000).required('Descrição do produto é obrigatório.'),
    estoque: yup.number().required(),
    status: yup.boolean(),
    preco: yup.number().required('Preço é obrigatório.')
});

const yupEditProduto = yup.object().shape({
    nome: yup.string(),
    imagem: yup.string(),
    descricao: yup.string().max(2000),
    estoque: yup.number(),
    status: yup.boolean(),
    preco: yup.number()
});


module.exports = {
    yupCreateProduto,
    yupEditProduto
};
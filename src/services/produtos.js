const knex = require('../database/connection');

async function CreateProduto(produtoData) {
    try {
        const existingProduto = await knex('produtos')
            .where({ nome: produtoData.nome })
            .first();

        if (existingProduto) return {
            message: 'Produto com esse nome já existe.'
        };

        await knex('produtos')
            .insert(produtoData);

        return { message: '201' };
    } catch ({ message }) {
        return { message };
    };
};

async function EditProduto(produtoData, produtoId) {
    try {
        let produto = await knex('produtos')
            .where({ id: produtoId })
            .first();

        if (!produto) return {
            message: 'Produto não existe.'
        };

        const editingProduto = {
            nome: produtoData.nome ? produtoData.nome : produto.nome,
            imagem: produtoData.imagem ? produtoData.imagem : produto.imagem,
            descricao: produtoData.descricao ? produtoData.descricao : produto.descricao,
            estoque: produtoData.estoque ? produtoData.estoque : produto.estoque,
            status: produtoData.status ? produtoData.status : produto.status,
            preco: produtoData.preco ? produtoData.preco : produto.preco
        };

        produto = await knex('produtos')
            .where({ id: produtoId })
            .update(editingProduto)
            .returning('*');

        return { produto };
    } catch ({ message }) {
        return { message };
    };
};

async function DeleteProduto(produtoId) {
    try {
        let produto = await knex('produtos')
            .where({ id: produtoId })
            .first();

        if (!produto) return {
            message: 'Produto não existe.'
        };

        await knex('produtos')
            .del()
            .where({ id: produtoId });

        return { message: 'Produto deletado!' };
    } catch ({ message }) {
        return { message };
    };
};

module.exports = {
    CreateProduto,
    EditProduto,
    DeleteProduto
};
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


module.exports = {
    CreateProduto
};
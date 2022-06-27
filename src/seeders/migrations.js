const schemas = require('../database/schemas');
const knex = require('../database/connection');

async function RunMigration() {
    try {
        const existingTableValues = await knex('produtos')
            .select('*');

        if (existingTableValues.length) return;
    } catch (error) {
        const executingSchemas = await knex.raw(schemas);
        return;
    };
};

module.exports = RunMigration;
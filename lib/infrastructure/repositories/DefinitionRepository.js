'use strict';

const connection = require('../../infrastructure/orm/mysql/mysql');
const DefinitionRepository = require('../../domain/repository/DefinitionRepository');
const query = require('../../application/enums/DatabaseEnum')



module.exports = class extends DefinitionRepository {
    async getDefinitions() {
        return connection.query(query.queryTable('Definitions')).spread((response) => response);
    }
    async getDefinition(id) {
        return connection.query(query.queryTableFilter('Definitions') + 'id=?', [id]).spread((response) => response);
    }
    async postDefinition() {
        return connection.query(query.queryTable('Definitions')).spread((response) => response);
    }
    async updateDefinition(id) {
        return connection.query(query.queryTable('Definitions')).spread((response) => response);
    }
    async deleteDefinition(id) {
        return connection.query(query.queryTable('Definitions')).spread((response) => response);
    }
};

'use strict';

const connection = require('../../infrastructure/orm/mysql/mysql');
const DefinitionRepository = require('../../domain/repository/DefinitionRepository');
const query = require('../../application/enums/DatabaseEnum')
const UID = require('../../application/uid/Uid');


module.exports = class extends DefinitionRepository {
    async getDefinitions() {
        return connection.query(query.queryTable('Definitions')).spread((response) => response);
    }
    async getDefinition(id) {
        return connection.query(query.queryTableFilter('Definitions') + 'id=?', [id]).spread((response) => response);
    }
    async postDefinition(key, value, status) {
        const id = UID.uid()
        const product_id = UID.uid()
        return connection.query(query.insertTable('Definitions', '(id,key, value, status, product_id)', '(?,?,?,?,?)'), [id, key, value, status, product_id]).spread((response) => response);
    }
    async updateDefinition(id, value, status) {
        const sqlQuery = `UPDATE Definitions set value =${value},status =${status} where id = ${id}`
        return connection.query(sqlQuery, [value, status, id]).spread((response) => response);
    }
    async deleteDefinition(id) {
        return connection.query(query.queryTable('Definitions')).spread((response) => response);
    }
};

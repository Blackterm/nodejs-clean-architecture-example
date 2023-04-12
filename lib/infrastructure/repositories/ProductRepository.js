'use strict';

const connection = require('../../infrastructure/orm/mysql/mysql');
const ProductRepository = require('../../domain/repository/ProducutRepository');
const query = require('../../application/enums/DatabaseEnum')



module.exports = class extends ProductRepository {
    async getProducts() {
        return connection.query(query.queryTable('Products'),).spread((response) => response);
    }
    async getProduct(id) {
        return connection.query(query.queryTableFilter('Products') + 'id=?', [id]).spread((response) => response);
    }
    async postProduct(name, status) {
        const id = UID.uid()
        const account_id = UID.uid()
        const definition_id = UID.uid()
        return connection.query(query.insertTable('Products', '(id,name,status, account_id, definition_id)', '(?,?,?,?,?)'), [id, name, status, status, account_id, definition_id]).spread((response) => response);
    }
    async updateProduct(id) {
        return connection.query(query.queryTable('Products')).spread((response) => response);
    }
    async deleteProduct(id) {
        return connection.query(query.queryTable('Products')).spread((response) => response);
    }
};

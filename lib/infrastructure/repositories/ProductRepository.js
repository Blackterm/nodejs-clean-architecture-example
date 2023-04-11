'use strict';

const connection = require('../../infrastructure/orm/mysql/mysql');
const ProductRepository = require('../../domain/repository/ProductRepository');
const query = require('../../application/enums/DatabaseEnum')



module.exports = class extends ProductRepository {
    async getProducts() {
        return connection.query(query.queryTable('Products'),).spread((response) => response);
    }
    async getProduct(id) {
        return connection.query(query.queryTableFilter('Products') + 'id=?', [id]).spread((response) => response);
    }
    async postProduct() {
        return connection.query(query.queryTable('Products'),).spread((response) => response);
    }
    async updateProduct(id) {
        return connection.query(query.queryTable('Products'),).spread((response) => response);
    }
    async deleteProduct(id) {
        return connection.query(query.queryTable('Products'),).spread((response) => response);
    }
};

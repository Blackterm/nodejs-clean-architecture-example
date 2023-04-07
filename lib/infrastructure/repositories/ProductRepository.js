'use strict';

const connection = require('../../infrastructure/orm/mysql/mysql');
const ProductRepository = require('../../domain/repository/ProdcutRepository');
const query = require('../../application/enums/DatabaseEnum')



module.exports = class extends ProductRepository {
    async getProductFilter(type) {
        return connection.query(query.queryTableFilter('Urunler') + 'type= ?', [type]).spread((response) => response);
    }
};

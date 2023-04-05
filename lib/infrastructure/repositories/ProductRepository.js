'use strict';

const connection = require('../../infrastructure/orm/mysql/mysql');
const ProductRepository = require('../../domain/repository/ProductRepository');
const UID = require('../../application/uid/Uid');



module.exports = class extends ProductRepository {


    async getProductList() {
        const uid = UID.uid()
        let sqlQuery = "INSERT INTO Product (name, price, stock, type, uid,) VALUES (?,?,?,?,?)";
        return connection.query(sqlQuery, [name, price, stock, type, uid]).spread((response) => response);
    }

};

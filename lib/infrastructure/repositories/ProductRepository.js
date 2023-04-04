'use strict';

const User = require('../../domain/entities/User');
const connection = require('../../infrastructure/orm/mysql/mysql');
const UserRepository = require('../../domain/repository/UserRepository');
const UID = require('../../application/uid/Uid');
const Boom = require('@hapi/boom');


module.exports = class extends UserRepository {


    async getProductList() {
        let sqlQuery = "SELECT * FROM Product";
        return connection.query(sqlQuery).spread((response) => response);
    }

};

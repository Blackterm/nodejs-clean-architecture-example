'use strict';

const User = require('../../domain/entities/User');
const connection = require('../../infrastructure/orm/mysql/mysql');
const UserRepository = require('../../domain/repository/UserRepository');

module.exports = class extends UserRepository {

    async find() {
        let sqlSorgusu = "SELECT * FROM Users";
        return connection.execute(sqlSorgusu).spread((response) => response);
    }

};

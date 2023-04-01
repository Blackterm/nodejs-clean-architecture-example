'use strict';

const User = require('../../domain/entities/User');
const connection = require('../../infrastructure/orm/mysql/mysql');
const UserRepository = require('../../domain/repository/UserRepository');

module.exports = class extends UserRepository {

    async getUserList() {
        let sqlQuery = "SELECT * FROM Users";
        return connection.execute(sqlQuery).spread((response) => response);
    }

    async getUserFirstName(name) {
        return `Hello ${name}!`;
    }

};

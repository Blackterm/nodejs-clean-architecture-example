'use strict';

const User = require('../../domain/entities/User');
const connection = require('../../infrastructure/orm/mysql/mysql');
const UserRepository = require('../../domain/repository/UserRepository');

module.exports = class extends UserRepository {

    async userLogin(email, password) {

        let sqlQuery = `SELECT * From UsersLogin where email= ? and password= ?`
        var res = await connection.query(sqlQuery, [email, password]).spread((response) => response);
        if (res.length === 1) {
            const resData = {
                "id": res[0].id,
                "name": res[0].name,
                "lastName": res[0].lastName,
                "email": res[0].email,
                "password": res[0].password
            }
            return resData
        } else {
            return null;
        }

    }

    async getUserList() {
        let sqlQuery = "SELECT * FROM Users";
        return connection.query(sqlQuery).spread((response) => response);
    }

    async getUserFirstName(name) {
        return `Hello ${name}!`;
    }

};

'use strict';

const User = require('../../domain/entities/User');
const connection = require('../../infrastructure/orm/mysql/mysql');
const UserRepository = require('../../domain/repository/UserRepository');
const UID = require('../../application/uid/Uid');
const Boom = require('@hapi/boom');


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

    async createUser(name, lastName, email, password, birthDate, gender) {
        const uid = UID.uid()
        let sqlQuery = "INSERT INTO Users (name, lastName, email, password, birthDate, gender,uid) VALUES (?,?,?,?,?,?,?)";
        return connection.query(sqlQuery, [name, lastName, email, password, birthDate, gender, uid]).spread((response) => response);
    }

    async getUserList() {
        let sqlQuery = "SELECT * FROM Users";
        return connection.query(sqlQuery).spread((response) => response);
    }

    async getUserFirstName(name) {
        return `Hello ${name}!`;
    }

};

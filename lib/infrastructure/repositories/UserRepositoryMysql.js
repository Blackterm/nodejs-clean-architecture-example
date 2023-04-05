'use strict';

const connection = require('../../infrastructure/orm/mysql/mysql');
const UserRepository = require('../../domain/repository/UserRepository');
const UID = require('../../application/uid/Uid');
const faker = require('@faker-js/faker');


module.exports = class extends UserRepository {

    async userLogin(email, password) {

        let sqlQuery = `SELECT * From Users where email= ? and password= ?`
        var res = await connection.query(sqlQuery, [email, password]).spread((response) => response);
        if (res.length === 1) {
            const resData = {
                "uid": res[0].uid,
                "name": res[0].name,
                "lastName": res[0].lastName,
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

    async getUserFirstName(res) {
        return `Hello ${res}!`;
    }

    async createProduct() {
        var product = {
            'name': faker.faker.commerce.productName(),
            'price': faker.faker.commerce.price(),
            'stock': Math.floor(Math.random() * 300),
            'type': faker.faker.commerce.productAdjective(),
            'uid': faker.faker.datatype.uuid(),
        }
        try {
            let sqlQuery = "INSERT INTO Urunler (name, price, stock, type, uid) VALUES (?,?,?,?,?)";
            await connection.query(sqlQuery, [product.name, product.price, product.stock, product.type, product.uid]).spread((response) => response);

        } catch (error) {
            throw new Error(error)
        }
    }

};

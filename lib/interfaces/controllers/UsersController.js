'use strict';
const Boom = require('@hapi/boom');
const ListUsers = require('../../domain/use_cases/GetUserList');
const UserName = require('../../domain/use_cases/GetUserName');
const UserLogin = require('../../domain/use_cases/GetAccessToken');
const { createHash } = require('crypto');

module.exports = {

    async getUserList(request) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        const users = await ListUsers(serviceLocator);

        // Output
        return users.map(serviceLocator.userSerializer.serialize)
    },

    async getUserName(request, h) {
        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        const name = await request.params.name;

        // Treatment
        const user = await UserName(name, serviceLocator);

        return user;
    },


    async loginUser(request, h) {
        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        const grantType = request.payload['grant_type'];
        const email = request.payload['email'];
        const password = request.payload['password'];

        if (!grantType || grantType !== 'password') {
            return Boom.badData('Your data is bad and you should feel bad');
        }
        if (!email || !password) {

            if (!email && !password) {
                return Boom.badData('Email and password is required');
            }
            else if (!password) {
                return Boom.badData('Password is required');
            }
            else {
                return Boom.badData('Email is required');
            }
        }


        // Treatment
        try {
            return UserLogin(email, password, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }
    },


};

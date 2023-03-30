'use strict';

const ListUsers = require('../../domain/use_cases/GetUserList');

module.exports = {

    async getUserList(request) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        const users = await ListUsers(serviceLocator);

        // Output
        return users
    },

};

'use strict';

module.exports = {
    async getProductTitle(request) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        const users = await ListUsers(serviceLocator);

    },



}
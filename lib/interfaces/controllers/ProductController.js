'use strict';

const GetProductFilter = require('../../domain/use_cases/GetProductsFilter');

module.exports = {
    async getProductsFilter(request) {
        const serviceLocator = request.server.app.serviceLocator;
        // Input
        const type = request.payload['type'];
        if (!type) {
            if (!type) {
                return Boom.badData('Type is required');
            }
        }

        // Treatment
        try {
            return GetProductFilter(type, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

}
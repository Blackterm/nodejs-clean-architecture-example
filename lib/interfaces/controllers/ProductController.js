'use strict';

const getProducts = require('../../domain/use_cases/Products/GetProducts');

module.exports = {
    async getProducts(request, h) {
        const serviceLocator = request.server.app.serviceLocator;
        // Treatment
        try {
            return GetProductFilter(serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async postProduct(request, h) {
        const serviceLocator = request.server.app.serviceLocator;
        // Treatment
        try {
            return GetProductFilter(serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async updateProduct(request, h) {
        const serviceLocator = request.server.app.serviceLocator;
        const id = await request.params.id;
        // Treatment
        try {
            return GetProductFilter(id, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async deleteProduct(request, h) {
        const serviceLocator = request.server.app.serviceLocator;
        const id = await request.params.id;
        // Treatment
        try {
            return GetProductFilter(id, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async getProduct(request, h) {
        const serviceLocator = request.server.app.serviceLocator;
        const id = await request.params.id;
        // Treatment
        try {
            return GetProductFilter(id, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

}
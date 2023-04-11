'use strict';
const Boom = require('@hapi/boom');
const GetProducts = require('../../domain/use_cases/Products/GetProducts');
const PostProduct = require('../../domain/use_cases/Products/PostProduct');
const UpdateProduct = require('../../domain/use_cases/Products/UpdateProduct');
const DeleteProduct = require('../../domain/use_cases/Products/DeleteProduct');
const GetProduct = require('../../domain/use_cases/Products/GetProduct');


module.exports = {
    async getProducts(request, h) {
        const serviceLocator = request.server.app.serviceLocator;
        // Treatment
        try {
            return GetProducts(serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async postProduct(request, h) {
        const serviceLocator = request.server.app.serviceLocator;
        // Treatment
        try {
            return PostProduct(serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async updateProduct(request, h) {
        const serviceLocator = request.server.app.serviceLocator;
        const id = await request.params.id;
        // Treatment
        try {
            return UpdateProduct(id, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async deleteProduct(request, h) {
        const serviceLocator = request.server.app.serviceLocator;
        const id = await request.params.id;
        // Treatment
        try {
            return DeleteProduct(id, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async getProduct(request, h) {
        const serviceLocator = request.server.app.serviceLocator;
        const id = await request.params.id;
        // Treatment
        try {
            return GetProduct(id, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

}
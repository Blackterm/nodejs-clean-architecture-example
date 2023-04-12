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
        const name = request.payload['name'];
        const status = request.payload['status'];

        if (!name || !status) {

            if (!name && !status) {
                return Boom.badData('Name and Status is required');
            }
            else if (!password) {
                return Boom.badData('Status is required');
            }
            else {
                return Boom.badData('Name is required');
            }
        }
        // Treatment
        try {
            return PostProduct(name, status, serviceLocator)
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
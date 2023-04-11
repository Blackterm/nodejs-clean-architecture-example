'use strict';
const Boom = require('@hapi/boom');
const GetDefinitions = require('../../domain/use_cases/Definitions/GetDefinitions');
const PostDefinition = require('../../domain/use_cases/Definitions/PostDefinition');
const UpdateDefinition = require('../../domain/use_cases/Definitions/UpdateDefinition');
const DeleteDefinition = require('../../domain/use_cases/Definitions/DeleteDefinition');
const GetDefinition = require('../../domain/use_cases/Definitions/GetDefinition');

module.exports = {
    async getDefinitions(request, h) {
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        try {
            return GetDefinitions(type, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async postDefinition(request, h) {
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        try {
            return PostDefinition(type, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async updateDefinition(request, h) {
        const serviceLocator = request.server.app.serviceLocator;
        const id = await request.params.id;
        // Treatment
        try {
            return UpdateDefinition(id, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async deleteDefinition(request, h) {
        const serviceLocator = request.server.app.serviceLocator;
        const id = await request.params.id;
        // Treatment
        try {
            return DeleteDefinition(id, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async getDefinition(request, h) {
        const serviceLocator = request.server.app.serviceLocator;
        const id = await request.params.id;
        // Treatment
        try {
            return GetDefinition(id, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

}
'use strict';


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

        // Treatment
        try {
            return UpdateDefinition(type, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async deleteDefinition(request, h) {
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        try {
            return DeleteDefinition(type, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async getDefinition(request, h) {
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        try {
            return GetDefinition(type, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

}
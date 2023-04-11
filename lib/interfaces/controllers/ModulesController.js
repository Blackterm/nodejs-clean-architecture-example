'use strict';


module.exports = {
    async getModules(request, h) {
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        try {
            return GetModules(type, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async postModule(request, h) {
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        try {
            return PostModule(type, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async updateModule(request, h) {
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        try {
            return UpdateModule(type, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async deleteModule(request, h) {
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        try {
            return DeleteModule(type, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async getModule(request, h) {
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        try {
            return GetModule(type, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

}
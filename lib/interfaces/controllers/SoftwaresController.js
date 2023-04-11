'use strict';


module.exports = {
    async getSoftwares(request, h) {
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        try {
            return GetSoftwares(type, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async postSoftware(request, h) {
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        try {
            return PostSoftware(type, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async updateSoftware(request, h) {
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        try {
            return UpdateSoftware(type, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async deleteSoftware(request, h) {
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        try {
            return DeleteSoftware(type, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async getSoftware(request, h) {
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        try {
            return GetSoftware(type, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

}
'use strict';

const Boom = require('@hapi/boom');
const GetSoftwares = require('../../domain/use_cases/Softwares/GetSoftwares');
const PostSoftware = require('../../domain/use_cases/Softwares/PostSoftware');
const UpdateSoftware = require('../../domain/use_cases/Softwares/UpdateSoftware');
const DeleteSoftware = require('../../domain/use_cases/Softwares/DeleteSoftware');
const GetSoftware = require('../../domain/use_cases/Softwares/GetSoftware');


module.exports = {
    async getSoftwares(request, h) {
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        try {
            return GetSoftwares(serviceLocator)
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
        const id = await request.params.id;
        // Treatment
        try {
            return UpdateSoftware(id, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async deleteSoftware(request, h) {
        const serviceLocator = request.server.app.serviceLocator;
        const id = await request.params.id;
        // Treatment
        try {
            return DeleteSoftware(id, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async getSoftware(request, h) {
        const serviceLocator = request.server.app.serviceLocator;
        const id = await request.params.id;
        // Treatment
        try {
            return GetSoftware(id, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

}
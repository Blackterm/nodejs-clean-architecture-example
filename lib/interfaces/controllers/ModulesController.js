'use strict';

const Boom = require('@hapi/boom');
const GetModules = require('../../domain/use_cases/Modules/GetModules');
const PostModule = require('../../domain/use_cases/Modules/PostModule');
const UpdateModule = require('../../domain/use_cases/Modules/UpdateModule');
const DeleteModule = require('../../domain/use_cases/Modules/DeleteModule');
const GetModule = require('../../domain/use_cases/Modules/GetModule');



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
        const id = await request.params.id;
        // Treatment    
        try {
            return UpdateModule(id, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async deleteModule(request, h) {
        const serviceLocator = request.server.app.serviceLocator;
        const id = await request.params.id;
        // Treatment
        try {
            return DeleteModule(id, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

    async getModule(request, h) {
        const serviceLocator = request.server.app.serviceLocator;
        const id = await request.params.id;
        // Treatment
        try {
            return GetModule(id, serviceLocator)
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }

    },

}
'use strict';

const ModulesController = require('../controllers/ModulesController');

module.exports = {
    name: 'ModulesApi',
    version: '1.0.0',
    register: async (server) => {

        server.route([
            {
                method: 'GET',
                path: '/api/v2/modules&with=definition',
                handler: ModulesController.getModules,
                options: {
                    description: 'Get Modules',
                    tags: 'auth',
                },
            },
            {
                method: 'POST',
                path: '/module',
                handler: ModulesController.postModule,
                options: {
                    description: 'Post Module',
                    tags: 'auth',
                },
            },
            {
                method: 'PUT',
                path: '/module/{id}',
                handler: ModulesController.updateModule,
                options: {
                    description: 'Put Module',
                    tags: 'auth',
                },
            },
            {
                method: 'DELETE',
                path: '/module/{id}',
                handler: ModulesController.deleteModule,
                options: {
                    description: 'Delete Module',
                    tags: 'auth',
                },
            },
            {
                method: 'GET',
                path: '/module/{id}',
                handler: ModulesController.getModule,
                options: {
                    description: 'Get Module',
                    tags: 'auth',
                },
            },

        ]);

    }
};
'use strict';

const DefinitionsController = require('../controllers/DefinitionsController');

module.exports = {
    name: 'DefinitionsApi',
    version: '1.0.0',
    register: async (server) => {

        server.route([
            {
                method: 'GET',
                path: '/definitions',
                handler: ModulesController.getDefinitions,
                options: {
                    description: 'Get Modules',
                    tags: 'auth',
                },
            },
            {
                method: 'POST',
                path: '/definition',
                handler: ModulesController.postDefinition,
                options: {
                    description: 'Post Module',
                    tags: 'auth',
                },
            },
            {
                method: 'PUT',
                path: '/definition/{id}',
                handler: ModulesController.updateDefinition,
                options: {
                    description: 'Put Module',
                    tags: 'auth',
                },
            },
            {
                method: 'DELETE',
                path: '/definition/{id}',
                handler: ModulesController.deleteDefinition,
                options: {
                    description: 'Delete Module',
                    tags: 'auth',
                },
            },
            {
                method: 'GET',
                path: '/definition/{id}',
                handler: ModulesController.getDefinition,
                options: {
                    description: 'Get Module',
                    tags: 'auth',
                },
            },

        ]);

    }
};
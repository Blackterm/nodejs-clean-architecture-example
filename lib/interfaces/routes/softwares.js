'use strict';

const SoftwaresController = require('../controllers/SoftwaresController');

module.exports = {
    name: 'SoftwaresApi',
    version: '1.0.0',
    register: async (server) => {

        server.route([
            {
                method: 'GET',
                path: '/softwares',
                handler: SoftwaresController.getSoftwares,
                options: {
                    description: 'Get softwares',
                    tags: 'auth',
                },
            },
            {
                method: 'POST',
                path: '/software',
                handler: SoftwaresController.postSoftware,
                options: {
                    description: 'Post Software',
                    tags: 'auth',
                },
            },
            {
                method: 'PUT',
                path: '/software/{id}',
                handler: SoftwaresController.updateSoftware,
                options: {
                    description: 'Put Software',
                    tags: 'auth',
                },
            },
            {
                method: 'DELETE',
                path: '/software/{id}',
                handler: SoftwaresController.deleteSoftware,
                options: {
                    description: 'Delete Software',
                    tags: 'auth',
                },
            },
            {
                method: 'GET',
                path: '/software/{id}',
                handler: SoftwaresController.getSoftware,
                options: {
                    description: 'Get Software',
                    tags: 'auth',
                },
            },

        ]);

    }
};
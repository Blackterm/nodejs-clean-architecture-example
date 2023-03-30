'use strict';

const UsersController = require('../controllers/UsersController');

module.exports = {
    name: 'users',
    version: '1.0.0',
    register: async (server) => {

        server.route([
            {
                method: 'GET',
                path: '/users',
                handler: UsersController.getUserList,
                options: {
                    description: 'List all users',
                    tags: ['api'],
                },
            },

        ]);
    }
};
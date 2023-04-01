'use strict';


const Joi = require("joi")

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
            {
                method: 'GET',
                path: '/user/{name}',
                handler: UsersController.getUserName,
                options: {
                    description: 'List all users',
                    tags: ['api'],

                },
            },

            {
                method: 'POST',
                path: '/login',
                handler: UsersController.loginUser,
                options: {
                    description: 'List all users',
                    tags: ['api'],
                },

            },
        ]);

    }
};
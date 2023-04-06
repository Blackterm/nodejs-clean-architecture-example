'use strict';

const ProductController = require('../controllers/ProductController');

module.exports = {
    name: 'products',
    version: '1.0.0',
    register: async (server) => {

        server.route([
            {
                method: 'POST',
                path: '/products',
                handler: ProductController.getProductsFilter,
                options: {
                    description: 'List filter products',
                    tags: ['api', 'auth'],

                },
            },

        ]);

    }
};
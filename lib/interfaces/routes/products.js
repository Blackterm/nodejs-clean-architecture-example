'use strict';

const ProductController = require('../controllers/ProductController');

module.exports = {
    name: 'ProductsApi',
    version: '1.0.0',
    register: async (server) => {

        server.route([
            {
                method: 'GET',
                path: '/api/v2/products&with=definition',
                handler: ProductController.getProducts,
                options: {
                    description: 'Get products',
                    tags: 'auth',
                },
            },
            {
                method: 'POST',
                path: '/products',
                handler: ProductController.postProduct,
                options: {
                    description: 'Post product',
                    tags: 'auth',
                },
            },
            {
                method: 'PUT',
                path: '/products/{id}',
                handler: ProductController.updateProduct,
                options: {
                    description: 'Put product',
                    tags: 'auth',
                },
            },
            {
                method: 'DELETE',
                path: '/products/{id}',
                handler: ProductController.deleteProduct,
                options: {
                    description: 'Delete product',
                    tags: 'auth',
                },
            },
            {
                method: 'GET',
                path: '/products/{id}',
                handler: ProductController.getProduct,
                options: {
                    description: 'Get product',
                    tags: 'auth',
                },
            },
            {
                method: 'GET',
                path: '/api/v2/home&with=definition',
                handler: ProductController.getHomeComponent,
                options: {
                    description: 'Get home component',
                    tags: 'auth',
                },
            },

        ]);

    }
};
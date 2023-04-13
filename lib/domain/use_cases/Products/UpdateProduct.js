'use strict';

module.exports = (id, name, status, { productRepository }) => {

    const res = productRepository.updateProduct(id, name, status);
    if (res.serverStatus === 2) {
        return {
            'message': 'Successfully updated product',
        }
    } else {
        return Boom.unauthorized('Failed to update product');
    }
};
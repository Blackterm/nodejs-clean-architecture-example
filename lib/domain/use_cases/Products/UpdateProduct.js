'use strict';

module.exports = async (id, name, status, { productRepository }) => {

    const res = await productRepository.updateProduct(id, name, status);
    if (res.serverStatus === 2) {
        return {
            'message': 'Successfully updated product',
        }
    } else {
        return Boom.unauthorized('Failed to update product');
    }
};
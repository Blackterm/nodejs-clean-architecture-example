'use strict';

module.exports = async (name, status, { productRepository }) => {
    var res = await productRepository.postProduct(name, status);
    if (res.serverStatus === 2) {
        return {
            'message': 'Okey was created successfully'
        }
    } else {
        return Boom.unauthorized('Failed to create');
    }
};
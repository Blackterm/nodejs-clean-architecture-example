'use strict';

module.exports = (id, name, status, { productRepository }) => {

    return productRepository.updateProduct(id, name, status);
};
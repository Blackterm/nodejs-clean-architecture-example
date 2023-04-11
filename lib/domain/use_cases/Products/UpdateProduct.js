'use strict';

module.exports = (id, { productRepository }) => {

    return productRepository.updateProduct(id);
};
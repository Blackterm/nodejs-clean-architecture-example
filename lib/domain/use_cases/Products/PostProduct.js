'use strict';

module.exports = (id, { productRepository }) => {

    return productRepository.postProduct(id);
};
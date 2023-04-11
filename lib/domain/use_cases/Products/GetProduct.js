'use strict';

module.exports = (id, { productRepository }) => {

    return productRepository.getProduct(id);
};
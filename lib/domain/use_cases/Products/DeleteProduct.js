'use strict';

module.exports = (id, { productRepository }) => {

    return productRepository.deleteProduct(id);
};
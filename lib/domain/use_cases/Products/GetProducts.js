'use strict';

module.exports = (type, { productRespository }) => {

    return productRespository.getProducts(type);
};
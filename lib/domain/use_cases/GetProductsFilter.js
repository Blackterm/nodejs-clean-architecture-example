module.exports = (type, { productRespository }) => {

    return productRespository.getProductFilter(type);
};
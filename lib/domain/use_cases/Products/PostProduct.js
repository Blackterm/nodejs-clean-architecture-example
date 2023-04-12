'use strict';

module.exports = async (name, status, { productRepository }) => {
    var res = await productRepository.postProduct(name, status);
    if (res.serverStatus === 2) {
        return {
            'res': 'Başarılı'
        }
    } else {
        return Boom.unauthorized('Kullanıcı bulunamadı');
    }
};
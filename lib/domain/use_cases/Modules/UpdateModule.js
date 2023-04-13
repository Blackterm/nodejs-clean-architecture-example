'use strict';

module.exports = (id, name, status, { moduleRepository }) => {

    return moduleRepository.updateModule(id, name, status);
};
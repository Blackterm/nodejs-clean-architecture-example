'use strict';

module.exports = (name, status, { moduleRepository }) => {

    return moduleRepository.postModule(name, status);
};
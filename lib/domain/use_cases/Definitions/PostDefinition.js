'use strict';

module.exports = (key, value, status, { definitionRepository }) => {

    return definitionRepository.postDefinition(key, value, status);
};
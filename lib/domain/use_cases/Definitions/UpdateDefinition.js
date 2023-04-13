'use strict';

module.exports = (id, value, status, { definitionRepository }) => {

    return definitionRepository.updateDefinition(id, value, status);
};
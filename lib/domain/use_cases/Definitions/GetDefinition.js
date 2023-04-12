'use strict';

module.exports = (id, { definitionRepository }) => {

    return definitionRepository.getDefinition(id);
};
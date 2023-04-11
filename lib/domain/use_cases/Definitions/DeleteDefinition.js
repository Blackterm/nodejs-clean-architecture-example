'use strict';

module.exports = (id, { definitionRepository }) => {

    return definitionRepository.deleteDefinition(id);
};
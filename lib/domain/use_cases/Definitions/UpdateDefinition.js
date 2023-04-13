'use strict';

module.exports = (id, value, status, { definitionRepository }) => {

    const res = definitionRepository.updateDefinition(id, value, status);
    if (res.serverStatus === 2) {
        return {
            'message': 'Successfully updated definition'
        }
    } else {
        return Boom.unauthorized('Failed to update definition');
    }
};
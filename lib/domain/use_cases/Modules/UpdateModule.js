'use strict';

module.exports = (id, name, status, { moduleRepository }) => {

    const res = moduleRepository.updateModule(id, name, status);
    if (res.serverStatus === 2) {
        return {
            'message': 'Module updated definition'
        }
    } else {
        return Boom.unauthorized('Failed to update module');
    }
};
'use strict';

module.exports = async (id, name, status, { softwareRepository }) => {

    const res = await softwareRepository.updateSoftware(id, name, status);
    if (res.serverStatus === 2) {
        return {
            'message': 'Successfully updated software'
        }
    } else {
        return Boom.unauthorized('Failed to update software');
    }
};
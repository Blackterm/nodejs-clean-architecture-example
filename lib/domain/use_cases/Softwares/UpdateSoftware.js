'use strict';

module.exports = (id, name, status, { softwareRepository }) => {

    return softwareRepository.updateSoftware(id, name, status);
};
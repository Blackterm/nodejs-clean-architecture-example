'use strict';

module.exports = (id, { softwareRepository }) => {

    return softwareRepository.getSoftware(id);
};
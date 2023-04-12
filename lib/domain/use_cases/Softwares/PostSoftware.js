'use strict';

module.exports = (name, status, { softwareRepository }) => {

    return softwareRepository.postSoftware(name, status);
};
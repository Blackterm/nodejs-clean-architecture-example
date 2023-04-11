'use strict';

module.exports = (id, { softwareRepository }) => {

    return softwareRepository.deleteSoftware(id);
};
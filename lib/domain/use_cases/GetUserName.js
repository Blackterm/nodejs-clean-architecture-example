'use strict';

module.exports = async (name, { userRepository }) => {

    return userRepository.getUserFirstName(name);
};
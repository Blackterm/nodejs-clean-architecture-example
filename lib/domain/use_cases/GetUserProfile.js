'use strict';

module.exports = async (fileNo, { userRepository }) => {
    return userRepository.getUserProfile(fileNo);
};
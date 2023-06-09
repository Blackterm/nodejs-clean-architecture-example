'use strict';

require('dotenv').config();

const constants = require('./constants');
const environment = require('./environment');

module.exports = {

    async init() {
        if (environment.database.dialect === constants.SUPPORTED_DATABASE.MYSQL) {
            require('../orm/mysql/mysql');
        }
    }
};

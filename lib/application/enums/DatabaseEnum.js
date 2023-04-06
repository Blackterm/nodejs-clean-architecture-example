'use strict';

module.exports = {
    queryTable(tableName) {
        return `SELECT * FROM ${tableName} `
    },
};

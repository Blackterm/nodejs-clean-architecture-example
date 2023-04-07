'use strict';

module.exports = {
    queryTableFilter(tableName) {
        return `SELECT * FROM ${tableName} where `
    },

    queryTable(tableName) {
        return `SELECT * FROM ${tableName}`
    },

    insertTable(tableName, columName, numberOfColumns) {
        return `INSERT INTO ${tableName} ${columName} VALUES ${numberOfColumns}`
    }
};

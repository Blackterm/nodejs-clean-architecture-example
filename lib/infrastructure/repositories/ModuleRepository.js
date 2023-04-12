'use strict';

const connection = require('../../infrastructure/orm/mysql/mysql');
const ModuleRepository = require('../../domain/repository/ModulesRepository');
const query = require('../../application/enums/DatabaseEnum')



module.exports = class extends ModuleRepository {
    async getModules() {
        return connection.query(query.queryTable('Modules')).spread((response) => response);
    }
    async getModule(id) {
        return connection.query(query.queryTableFilter('Modules') + 'id=?', [id]).spread((response) => response);
    }
    async postModule() {
        return connection.query(query.queryTable('Modules')).spread((response) => response);
    }
    async updateModule(id) {
        return connection.query(query.queryTable('Modules')).spread((response) => response);
    }
    async deleteModule(id) {
        return connection.query(query.queryTable('Modules')).spread((response) => response);
    }
};

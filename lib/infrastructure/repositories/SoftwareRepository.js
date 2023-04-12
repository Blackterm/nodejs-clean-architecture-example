'use strict';

const connection = require('../../infrastructure/orm/mysql/mysql');
const SoftwareRepository = require('../../domain/repository/SoftwareRepository');
const query = require('../../application/enums/DatabaseEnum')



module.exports = class extends SoftwareRepository {
    async getSoftwares() {
        return connection.query(query.queryTable('Softwares')).spread((response) => response);
    }
    async getSoftware(id) {
        return connection.query(query.queryTableFilter('Softwares') + 'id=?', [id]).spread((response) => response);
    }
    async postSoftware() {
        return connection.query(query.queryTable('Softwares')).spread((response) => response);
    }
    async updateSoftware(id) {
        return connection.query(query.queryTable('Softwares')).spread((response) => response);
    }
    async deleteSoftware(id) {
        return connection.query(query.queryTable('Softwares')).spread((response) => response);
    }
};

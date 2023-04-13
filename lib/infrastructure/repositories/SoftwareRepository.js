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
    async postSoftware(name, status) {
        const id = UID.uid()
        const uid = UID.uid()
        return connection.query(query.insertTable('Softwares', '(id,name,status, definition_id,connection_definition_id)', '(?,?,?,?,?)'), [id, name, status, status, uid, uid]).spread((response) => response);
    }
    async updateSoftware(id, name, status) {
        const sqlQuery = `UPDATE Softwares set name ='${name}',status ='${status}' where id = '${id}'`
        return connection.query(sqlQuery, [name, status, id]).spread((response) => response);
    }
    async deleteSoftware(id) {
        return connection.query(query.queryTable('Softwares')).spread((response) => response);
    }
};

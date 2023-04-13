'use strict';


module.exports = class {

    getDefinitions() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
    postDefinition(key, value, status) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
    updateDefinition(id, value, status) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
    deleteDefinition(id) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
    getDefinition(id) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
};

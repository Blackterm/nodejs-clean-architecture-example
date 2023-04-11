'use strict';

const constants = require('./constants');
const environment = require('./environment');
const JwtAccessTokenManager = require('../security/JwtAccessTokenManager');
const UserSerializer = require('../../interfaces/serializers/UserSerializer');

function buildBeans() {

    const beans = {
        accessTokenManager: new JwtAccessTokenManager(),
        userSerializer: new UserSerializer(),
    };

    if (environment.database.dialect === constants.SUPPORTED_DATABASE.MYSQL) {
        const UserRepositoryMongo = require('../repositories/UserRepositoryMysql');
        const ProductRespository = require('../repositories/ProductRepository');
        const DefinitionRepository = require('../repositories/DefinitionRepository');
        const SoftwareRepository = require('../repositories/SoftwareRepository');
        const ModuleRepository = require('../repositories/ModuleRepository');
        beans.productRespository = new ProductRespository();
        beans.userRepository = new UserRepositoryMongo();
        beans.definitionRepository = new DefinitionRepository();
        beans.softwareRepository = new SoftwareRepository();
        beans.moduleRepository = new ModuleRepository();
    }

    return beans;
}

module.exports = buildBeans();

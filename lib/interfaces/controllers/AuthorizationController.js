'use strict';

const Boom = require('@hapi/boom');
const GetAccessToken = require('../../domain/use_cases/GetAccessToken');
const VerifyAccessToken = require('../../domain/use_cases/VerifyAccessToken');

module.exports = {

    async getAccessToken(request) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        const grantType = request.payload['grant_type'];
        const email = request.payload['username'];
        const password = request.payload['password'];

        if (!grantType || grantType !== 'password') {
            return Boom.badRequest('Invalid authentication strategy');
        }

        // Treatment
        try {
            const accessToken = await GetAccessToken(email, password, serviceLocator);

            // Output
            return accessToken;
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }
    },

    verifyAccessToken(request) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        const authorizationHeader = request.headers.authorization;
        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
            throw Boom.badRequest('Missing or wrong Authorization request header', 'oauth');
        }
        const accessToken = authorizationHeader.replace(/Bearer/gi, '').replace(/ /g, '');

        // Treatment
        try {
            // Output
            return VerifyAccessToken(accessToken, serviceLocator);
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }
    },

};
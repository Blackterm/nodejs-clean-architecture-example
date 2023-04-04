'use strict';

const jwt = require('jsonwebtoken');
const AccessTokenManager = require('../../application/security/AccessTokenManager');
const UID = require('../../application/uid/Uid');
module.exports = class extends AccessTokenManager {

    generate(payload) {
        return {
            'token': jwt.sign({
                data: {
                    'id': payload
                }
            }, 'secret', { expiresIn: '1h' })
        }
    }

    async decode(accessToken) {

        var token = await jwt.decode(accessToken.token)
        if (Date.now() >= token.exp * 1000) {
            return false;
        }
        else {
            return true;
        }
    }

};
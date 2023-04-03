'use strict';

const jwt = require('jsonwebtoken');
const AccessTokenManager = require('../../application/security/AccessTokenManager');
const { createHash } = require('crypto');


module.exports = class extends AccessTokenManager {

    generate(payload) {
        return {
            'token': createHash('sha256').update(payload).digest('hex')
        }
    }

    decode(accessToken) {
        return jwt.verify(accessToken, JWT_SECRET_KEY);
    }

};
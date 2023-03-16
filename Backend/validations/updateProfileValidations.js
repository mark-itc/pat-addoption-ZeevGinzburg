const Ajv = require('ajv');
const ajv = new Ajv();

module.exports.profileUpdateValidation = ajv.compile({
    type: 'object',
    properties: {
        currentLoggedInUserName: {type: 'string'},
        username: { type: 'string' },
        currentPassword: { type: 'string' },
        newPassword: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        phoneNumber: { type: 'string' },
        bio: { type: 'string' }
    },
    required: ["currentPassword"],
    additionalProperties: false
})
const Ajv = require('ajv');
const ajv = new Ajv();

module.exports.signUpValidation = ajv.compile({
    type: 'object',
    properties: {
        username: { type: 'string' },
        password: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        phoneNumber: { type: 'string' }
    },
    required: ['username', 'password', "firstName", "lastName" ],
    additionalProperties: false
})


module.exports.logInValidation = ajv.compile({
    type: 'object',
    properties: {
        username: { type: 'string' }, //Need to add MInMax length 
        password: { type: 'string' }, //Need to add MInMax length 
        adminPassword: {type: 'string'}
    },
    required: ['username', 'password'],
    additionalProperties: false
})


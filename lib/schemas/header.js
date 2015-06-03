var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'Header',
    fields: {
        'from.company': {
            tag: 'FromCompany'
        },
        'from.person': {
            tag: 'FromPerson'
        },
        'from.email': {
            tag: 'FromEmail'
        },
        'sent': {
            tag: 'SentDate',
            transform: utils.formatDate
        }
    }
};

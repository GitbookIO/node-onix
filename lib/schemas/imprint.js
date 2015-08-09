var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'Imprint',
    fields: {
        name: {
            tag: 'ImprintName',
            transform: String
        }
    },
    map: {
        to: 'name'
    }
};

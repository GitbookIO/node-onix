var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'ProductIdentifier',
    fields: {
        type: {
            tag: 'ProductIDType',
            transform: _.partialRight(utils.pad, 2),
            default: 1
        },
        value: {
            tag: 'IDValue',
            transform: String
        }
    },
    map: {
        to: 'value'
    }
};

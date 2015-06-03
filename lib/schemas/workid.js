var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'WorkIdentifier',
    fields: {
        type: {
            tag: 'WorkIDType',
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

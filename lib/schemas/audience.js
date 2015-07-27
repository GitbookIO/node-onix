var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'Audience',
    array: true,
    fields: {
        type: {
            tag: 'AudienceCodeType',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 1
        },
        value: {
            tag: 'AudienceCodeValue',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number
        }
    },
    map: {
        to: 'value'
    }
};

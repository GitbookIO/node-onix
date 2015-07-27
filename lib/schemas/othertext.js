var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'OtherText',
    array: true,
    fields: {
        type: {
            tag: 'TextTypeCode',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number
        },
        content: {
            tag: 'Text',
            raw: true
        }
    }
};

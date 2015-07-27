var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'MediaFile',
    array: true,
    fields: {
        type: {
            tag: 'MediaFileTypeCode',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 1
        },
        linkType: {
            tag: 'MediaFileLinkTypeCode',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 1
        },
        link: {
            tag: 'MediaFileLink'
        }
    }
};

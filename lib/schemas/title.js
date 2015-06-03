var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'Title',
    fields: {
        type: {
            tag: 'TitleType',
            transform: _.partialRight(utils.pad, 2),
            default: 1
        },
        text: {
            tag: 'TitleText',
            transform: String
        },
        subtitle: {
            tag: 'Subtitle',
            transform: String
        }
    },
    map: {
        to: 'text'
    }
};

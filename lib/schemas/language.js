var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'Language',
    fields: {
        role: {
            tag: 'LanguageRole',
            transform: _.partialRight(utils.pad, 2),
            default: 1
        },
        code: {
            tag: 'LanguageCode',
            transform: function(s) { return String(s).toLowerCase(); }
        }
    },
    map: {
        to: 'code'
    }
};

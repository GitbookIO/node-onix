var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'Subject',
    array: true,
    fields: {
        identifier: {
            tag: 'SubjectSchemeIdentifier',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 10
        },
        version: {
            tag: 'SubjectSchemeVersion'
        },
        code: {
            tag: 'SubjectCode',
            transform: function(s) { return String(s).toUpperCase(); }
        },
        heading: {
            tag: 'SubjectHeadingText'
        },
        main: {
            tag: 'MainSubject',
            bool: true
        }
    },
    map: {
        to: 'code'
    }
};

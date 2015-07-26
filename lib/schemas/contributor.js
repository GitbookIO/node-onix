var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'Contributor',
    array: true,
    fields: {
        sequence: {
            tag: 'SequenceNumber',
            untransform: Number,
            default: 1
        },
        role: {
            tag: 'ContributorRole',
            default: 'A01'
        },
        name: {
            tag: 'PersonName'
        },
        nameInverted: {
            tag: 'PersonNameInverted'
        },
        note: {
            tag: 'BiographicalNote'
        }
    }
};

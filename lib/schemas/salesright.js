var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'SalesRights',
    array: true,
    fields: {
        type: {
            tag: 'SalesRightsType',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 02
        },
        territory: {
            tag: 'RightsTerritory',
            default: 'WORLD'
        }
    },
    map: {
        to: 'territory'
    }
};


var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'SupplyDetail',
    fields: {
        name: {
            tag: 'SupplierName',
            default: String
        },
        availabilityCode: {
            tag: 'AvailabilityCode',
            transform: _.partialRight(utils.pad, 2),
            default: 1
        }
    },
    map: {
        to: 'name'
    }
};

var _ = require('lodash');
var utils = require('../utils');

var Price = require('./price');

module.exports = {
    tag: 'SupplyDetail',
    fields: {
        name: {
            tag: 'SupplierName'
        },
        availability: {
            tag: 'AvailabilityCode',
            default: 20
        },
        shipDate: {
            tag: 'ExpectedShipDate',
            transform: utils.formatDate,
            untransform: utils.unformatDate
        },
        saleDate: {
            tag: 'OnSaleDate',
            transform: utils.formatDate,
            untransform: utils.unformatDate
        },
        prices: Price
    }
};

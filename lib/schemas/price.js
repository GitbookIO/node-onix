var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'Price',
    fields: {
        code: {
            tag: 'PriceTypeCode',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 1
        },
        qualifier: {
            tag: 'PriceQualifier',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 5
        },
        amount: {
            tag: 'PriceAmount',
            transform: Number
        },
        currency: {
            tag: 'CurrencyCode',
            transform: function(s) { return s.toUpperCase(); },
            untransform: Number,
            default: 'usd'
        }
    },
    map: {
        to: 'amount'
    }
};

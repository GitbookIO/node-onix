var _ = require('lodash');
var utils = require('../utils');

module.exports = {
    tag: 'Price',
    fields: {
        code: {
            tag: 'PriceTypeCode',
            transform: _.partialRight(utils.pad, 2),
            default: 1
        },
        qualifier: {
            tag: 'PriceQualifier',
            transform: _.partialRight(utils.pad, 2),
            default: 5
        },
        amount: {
            tag: 'PriceAmount',
            transform: Number
        },
        currency: {
            tag: 'CurrencyCode',
            transform: function(s) { return s.toUpperCase(); },
            default: 'usd'
        }
    },
    map: {
        to: 'amount'
    }
};

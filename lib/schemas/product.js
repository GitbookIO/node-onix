var _ = require('lodash');
var utils = require('../utils');

var Price = require('./price');
var Title = require('./title');
var Language = require('./language');
var SupplyDetail = require('./supplydetail');

module.exports = {
    tag: 'Product',

    fields: {
        'id': {
            tag: 'RecordReference',
            raw: true
        },
        'notification': {
            tag: 'NotificationType',
            transform: _.partialRight(utils.pad, 2),
        },
        'title': Title,
        'prices': Price,
        'language': Language,
        'supply': SupplyDetail
    }
}

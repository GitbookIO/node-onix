var _ = require('lodash');
var utils = require('../utils');

var Price = require('./price');
var Title = require('./title');
var Language = require('./language');
var SupplyDetail = require('./supplydetail');
var ProductId = require('./productid');

module.exports = {
    tag: 'Product',

    fields: {
        'record': {
            tag: 'RecordReference',
            raw: true
        },
        'notification': {
            tag: 'NotificationType',
            transform: _.partialRight(utils.pad, 2),
        },
        'id': ProductId,
        'form': {
            tag: 'ProductForm',
            transform: String
        },
        'title': Title,
        'prices': Price,
        'language': Language,
        'supply': SupplyDetail
    }
}

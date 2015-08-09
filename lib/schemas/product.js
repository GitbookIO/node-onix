var _ = require('lodash');
var utils = require('../utils');

var Price = require('./price');
var Title = require('./title');
var Language = require('./language');
var ProductId = require('./productid');
var WorkId = require('./workid');
var Contributor = require('./contributor');
var Subject = require('./subject');
var Audience = require('./audience');
var SupplyDetail = require('./supplydetail');
var MediaFile = require('./mediafile');
var OtherText = require('./othertext');
var Imprint = require('./imprint');
var Publisher = require('./publisher');

module.exports = {
    tag: 'Product',
    array: true,
    fields: {
        'record': {
            tag: 'RecordReference',
            raw: true
        },
        'notification': {
            tag: 'NotificationType',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number
        },
        'publishingStatus': {
            tag: 'PublishingStatus',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number
        },
        'id': ProductId,
        'workId': WorkId,
        'form': {
            tag: 'ProductForm',
            transform: String
        },
        'epubType': {
            tag: 'EpubType',
            transform: _.partialRight(utils.pad, 3),
            untransform: Number,
        },
        'cityOfPublication': {
            tag: 'CityOfPublication'
        },
        'countryOfPublication': {
            tag: 'CountryOfPublication'
        },
        'publicationDate': {
            tag: 'PublicationDate',
            transform: utils.formatDate,
            untransform: utils.unformatDate
        },
        'title': Title,
        'prices': Price,
        'language': Language,
        'contributors': Contributor,
        'subjects': Subject,
        'audiences': Audience,
        'medias': MediaFile,
        'supply': SupplyDetail,
        'texts': OtherText,
        'imprint': Imprint,
        'publisher': Publisher,
        'numberOfPages': {
            tag: 'NumberOfPages',
            untransform: Number
        },
    }
}

var _ = require("lodash");
var builder = require('xmlbuilder');
var subjects = require("subjects-utils");

function addPrice(feed, price) {
    var el = feed.ele('Price');
    if (!_.isObject(price)) price = { amount: price };

    el.ele('PriceTypeCode', '01');
    el.ele('PriceQualifier', '05');
    el.ele('PriceAmount', price.amount);
    el.ele('CurrencyCode', (price.currency || 'USD'));
}

function addProduct(feed, product) {
    var el = feed.ele('Product');

    // Add prices
    if (product.price) product.prices = [product.price];
    _.each(product.prices, _.partial(addPrice, el));
}


function create(definition, products) {
    definition =_.defaults(definition || {}, {
        from: {}
    });
    products = products || [];

    var feed = builder.create('ONIXMessage', {
        version: '1.0',
        encoding: 'UTF-8',
        standalone: false
    });

    feed.dtd('http://www.editeur.org/onix/2.1/reference/onix-international.dtd');

    // Add header
    var header = feed.ele('Header');
    if (definition.from.company) header.ele('FromCompany', {}, definition.from.company);
    if (definition.from.person) header.ele('FromPerson', {}, definition.from.person);
    if (definition.from.email) header.ele('FromEmail', {}, definition.from.email);

    // Add products
    _.each(products, _.partial(addProduct, feed));

    return feed.end({
        pretty: true
    });
}

module.exports = {
    create: create
};

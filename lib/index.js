var _ = require("lodash");
var builder = require('xmlbuilder');
var subjects = require("subjects-utils");

var utils = require('./utils');
var codes = require('./codes');
var schemas = require('./schemas');
var engine = require('./engine');

function create(definition) {
    definition =_.defaults(definition || {}, {
        sent: new Date(),
        from: {},
        suplier: {},
        products: []
    });

    var feed = builder.create('ONIXMessage', {
        version: '1.0',
        encoding: 'UTF-8',
        standalone: false
    });
    feed.dtd('http://www.editeur.org/onix/2.1/reference/onix-international.dtd');

    engine.applySchema(feed, schemas.Onix, definition);

    return feed.end({
        pretty: true
    });
}

module.exports = {
    create: create,
    codes: codes
};

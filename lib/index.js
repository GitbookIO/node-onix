var _ = require("lodash");
var builder = require('xmlbuilder');
var subjects = require("subjects-utils");


function create(definition, books) {
    definition =_.defaults(definition || {}, {
        author: {}
    });
    books = books || [];

    var feed = builder.create('ONIXMessage', {
        version: '1.0',
        encoding: 'UTF-8',
        standalone: false
    });

    feed.dtd('http://www.editeur.org/onix/2.1/reference/onix-international.dtd');

    return feed.end({
        pretty: true
    });
}

module.exports = {
    create: create
};

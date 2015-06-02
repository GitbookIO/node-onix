var _ = require("lodash");
var builder = require('xmlbuilder');
var subjects = require("subjects-utils");


function create(definition, books) {
    definition =_.defaults(definition || {}, {
        author: {}
    });
    books = books || [];

    var feed = builder.create('feed', {
        version: '1.0',
        encoding: 'UTF-8'
    });

    return feed.end({
        pretty: true
    });
}

module.exports = {
    create: create
};

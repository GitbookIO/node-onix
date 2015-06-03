var _ = require("lodash");
var xmlSchema = require("xml-schema");
var subjects = require("subjects-utils");

var utils = require('./utils');
var codes = require('./codes');
var schemas = require('./schemas');

function create(definition) {
    return xmlSchema.create(schemas.Onix, definition, {
        version: '1.0',
        encoding: 'UTF-8',
        standalone: false,
        pretty: true
    });
    //feed.dtd('http://www.editeur.org/onix/2.1/reference/onix-international.dtd');
}

module.exports = {
    create: create,
    codes: codes
};

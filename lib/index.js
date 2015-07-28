var _ = require("lodash");
var XMLSchema = require("xml-schema");
var subjects = require("subjects-utils");

var utils = require('./utils');
var codes = require('./codes');
var schemas = require('./schemas');


var onixSchema = new XMLSchema(schemas.Onix);

function create(definition) {
    return onixSchema.generate(definition, {
        version: '1.0',
        encoding: 'UTF-8',
        standalone: false,
        pretty: true
    }, {
        sysID: "http://www.editeur.org/onix/2.1/reference/onix-international.dtd"
    });
}

function parse(xml) {
    return onixSchema.parse(xml.replace(/\<(\?xml|(\!DOCTYPE[^\>\[]+(\[[^\]]+)?))+[^>]+\>/g, ''));
}

module.exports = {
    parse: parse,
    create: create,
    codes: codes
};

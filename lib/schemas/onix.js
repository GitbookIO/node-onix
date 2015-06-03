var Product = require('./product');
var Header = require('./header');

module.exports = {
    tag: 'ONIXMessage',

    fields: {
        '$': Header,
        'products': Product
    }
}

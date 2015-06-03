var Price = require('./price');

module.exports = {
    tag: 'Product',

    fields: {
        'id': {
            tag: 'RecordReference',
            raw: true
        },
        'prices': Price
    }
}

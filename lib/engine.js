var _ = require('lodash');

function isBasicValue(val) {
    return _.isString(val) || _.isNumber(val) || _.isBoolean(val);
}


// Create element and apply shcema
function createElement(feed, schema, value) {
    var el = feed.ele(schema.tag);
    applySchema(el, schema, value);
}

// Apply a schema to an existing element
function applySchema(el, schema, value) {
    schema = _.defaults(schema || {}, {
        text: true,
        fields: {},
        transform: _.identity,
        default: undefined,
        map: {}
    });

    // Apply default value
    value = value || schema.default;

    // Map value
    if (schema.map.to && isBasicValue(value)) {
        value = _.object([[schema.map.to, value]]);
    }

    // Transform value
    value = schema.transform(value);

    // Add value if string or number
    if (schema.text && isBasicValue(value)) {
        el.txt(value);
    }

    // Apply sub-fields
    _.each(schema.fields, function(field, key) {
        // Extract valeu to use for the field
        var val = key == '$'? value : _.get(value, key);

        // Create new element and handle arrays
        if (_.isArray(val)) {
            _.each(val, _.partial(createElement, el, field));
        } else {
            createElement(el, field, val);
        }
    });

}

module.exports = {
    createElement: createElement,
    applySchema: applySchema
};

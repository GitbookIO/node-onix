# node-onix

[![NPM version](https://badge.fury.io/js/onix.svg)](http://badge.fury.io/js/onix)
[![Build Status](https://travis-ci.org/GitbookIO/node-onix.png?branch=master)](https://travis-ci.org/GitbookIO/node-onix)

This library can be used to parse, or generate ONIX files from a list of books metadatas.

### Installation

```
$ npm install onix
```

### How to use it?

```js
var onix = require("onix");

var xml = onix.create({
    from: {
        company: "GitBook",
        person: "Samy Pesse",
        email: "samy@gitbook.com"
    },
    suplier: {
        name: "ePubDirect",
        availabilityCode: "IP"
    },
    products: [
        {
            // Single record reference which will uniquely identify the product
            record: "gitbook.com-bookId",

            // Notification type
            notification: onix.codes.NOTIFICATION.ADVANCE,

            // ISBN or other id
            id: {
                type: onix.codes.PRODUCTID.ISBN13,
                value: '978123456789'
            },

            //
            title: "My Awesome Book",

            // Language code as ISO 639
            language: "eng",

            // List of prices (number or object) or unique "price"
            prices: [
                {
                    amount: 6,
                    currency: 'eur'
                },

                // Number will default to usd currency
                5
            ]
        }
    ]
});
```

You can also parse an ONIX feed:

```js

var feed = onix.parse('...');
```


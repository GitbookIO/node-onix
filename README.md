# ONIX for Books

[![NPM version](https://badge.fury.io/js/onix-builder.svg)](http://badge.fury.io/js/onix-builder)
[![Build Status](https://travis-ci.org/GitbookIO/onix-builder.png?branch=master)](https://travis-ci.org/GitbookIO/onix-builder)

This library can be used to generate ONIX files from a list of books metadatas.

### Installation

```
$ npm install onix-builder
```

### How to use it?

```js
var onix = require("onix-builder");

var xml = onix.create({
    from: {
        company: "GitBook",
        person: "Samy Pesse",
        email: "samy@gitbook.com"
    },
    suplier: {
        name: "ePubDirect",
        availabilityCode: "IP"
    }
}, [
    {
        // Single record reference which will uniquely identify the product
        id: "gitbook.com-<book id>",

        // Notification type
        notification: onix.codes.NOTIFICATION.ADVANCE,

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
]);
```



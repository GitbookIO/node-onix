var onix = require('../');

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
            id: "gitbook.com-bookId",

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
    ]
});

console.log(xml);

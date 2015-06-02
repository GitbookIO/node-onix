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
    }
}, [
    {
        title: "My Awesome Book",
        language: "eng",
        prices: [
            {
                amount: 6,
                currency: 'eur'
            },
            5
        ]
    }
]);

console.log(xml);

var onix = require('../');

var xml = onix.create({
    from: {
        company: "GitBook",
        person: "Samy Pesse",
        email: "samy@gitbook.com"
    }
}, [
    {
        price: 10
    },
    {
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

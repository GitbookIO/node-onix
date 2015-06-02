var utils = require('../lib/utils');
var should = require('should');

describe('Utils', function () {
    it('should correctly format a date', function() {
        var d = new Date(2015, 05, 1);

        utils.formatDate(d).should.be.equal('20150601');
    });
});

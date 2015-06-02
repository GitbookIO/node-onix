var utils = require('../lib/utils');
var should = require('should');

describe('Utils', function () {
    it('should correctly format a date', function() {
        var d = new Date(2015, 05, 1);

        utils.formatDate(d).should.be.equal('20150601');
    });

    it('should correctly pad integer', function() {
        utils.pad(5, 2).should.be.equal('05');
        utils.pad(52, 4).should.be.equal('0052');
    });
});

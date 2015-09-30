'use strict';

var expect = require('expect.js');

describe('models/index', function () {
    it('returns the planet model', function () {
        var models = require('../../lib/models');
        expect(models.Planet).to.be.ok();
    });

    it('returns the probe model', function () {
        var models = require('../../lib/models');
        expect(models.Probe).to.be.ok();
    });
});
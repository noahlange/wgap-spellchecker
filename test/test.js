/* globals describe, it */

var mocha = require('mocha');
var chai = require("chai");
var expect = chai.expect;

describe('Write-Good (as Promised) - Spelling', function() {
  describe('general functionality', function() {
    it('should resolve to an array of issues', function() {
      var spelling = require('../index');
      expect(spelling('There are som werds spellt incorrectly heer.')).to.eql([
        { reason: 'som (some, son, tom)', index: 10, offset: 3 },
        { reason: 'werds (words, weeds, nerds)', index: 14, offset: 5 },
        { reason: 'spellt (spells, spell, spelt)', index: 20, offset: 6 },
        { reason: 'heer (here, hear, her)', index: 39, offset: 4 }
      ]);
    });
  });
});
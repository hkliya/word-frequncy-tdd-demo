"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");

describe("Word frequency", function(){
    it("return empty given empty string", function(){
        var result = main('');
        var expect_string = '';
        
        expect(expect_string).to.equal(result);
    });

    it("return word frequency given one word", function () {
        var result = main('the');
        var expect_string = 'the 1';

        expect(expect_string).to.equal(result);
    });

    it("return word frequency given two different words", function () {
        var result = main('the is');
        var expect_string = 'the 1\r\nis 1';

        expect(expect_string).to.equal(result);
    });

    it("return word frequency given duplicated words", function () {
        var result = main('the is the');
        var expect_string = 'the 2\r\nis 1';

        expect(expect_string).to.equal(result);
    });

    it("return word frequency given duplicated words need sort", function () {
        var result = main('the is is');
        var expect_string = 'is 2\r\nthe 1';

        expect(expect_string).to.equal(result);
    });

    it("return word frequency given words split with multiple spaces", function () {
        var result = main('the  is');
        var expect_string = 'the 1\r\nis 1';

        expect(expect_string).to.equal(result);
    });
});
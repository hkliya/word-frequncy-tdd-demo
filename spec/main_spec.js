"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");

describe("Word Frequency", function(){
    it("returns empty string given empty string", function(){
        var result = main('');
        expect(result).to.equal('');
    });

    it("returns string given one word", function(){
        var result = main('he');
        expect(result).to.equal('he 1');
    });

    it("returns string given two different words", function(){
        var result = main('he is');
        expect(result).to.equal('he 1\r\nis 1');
    });

    it("returns string given duplicated words", function(){
        var result = main('he is he');
        expect(result).to.equal('he 2\r\nis 1');
    });

    it("returns string given duplicated words need to be sorted", function(){
        var result = main('he is is');
        expect(result).to.equal('is 2\r\nhe 1');
    });

    it("returns string given words splited by multiple spaces", function(){
        var result = main('he    is');
        expect(result).to.equal('he 1\r\nis 1');
    });

});
/**
 * Created by afirdousi on 12/19/15.
 */
var expect = require('chai').expect;
var clients = require('./index.js');

describe('dummy',function(){

    it('should work', function () {
       expect(true).to.be.true;
    });

    it('shoudl return more than 1 clients', function () {
       expect(clients.all).to.have.length.above(1);
    });

    it('should contain "lmn"',function(){
            expect(clients.all).to.include('lmn');
        });

    it('should contain all strings',function(){
        expect(clients.all).to.satisfy(isStringOnlyArray);

    });

    function isStringOnlyArray(arr){
        return arr.every(function(item){
            return typeof item === 'string';
        })
    }

    it('should return a random item', function () {
        var randomItem = clients.random();
        expect(clients.all).to.include(randomItem);
    });

    it('return number of items wanted', function () {
            var randomItem = clients.random(3);
            expect(randomItem).to.have.length(3);

    });

    it('should return first name',function(){
        var actualName = clients.all;
        var name = clients.firstName();
        expect(name).to.be.equal(actualName[0]);

    });

    it('should return last name',function(){
        var actualName = clients.all;
        var name = clients.lastName();
        expect(name).to.be.equal(actualName[clients.all.length-1]);

    });






})
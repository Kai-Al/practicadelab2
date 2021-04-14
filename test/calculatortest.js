'use strict';

var expect = require("chai").expect;
var calculator = require("../app/calculator");

describe("Calculator - Test", function(){

  describe("Testing Operations",function(){

    it("Testing the sum operation", function(){
        expect(calculator.add(1,1)).to.equal(1+1);
    });
    it("Testing the minus operation", function(){
        expect(calculator.minus(1,1)).to.equal(1-1);
    });
it("Testing the miltiply operation", function(){
        expect(calculator.multiply(3,3)).to.equal(3*3);
    });

    it("Testing the divide operation", function(){
        expect(calculator.divide(3,3)).to.equal(3/3);
    });

    it("Testing the divide operation by zero", function(){
       const expectError= new Error("No se puede dividir por cero");
        expect(calculator.divide(3,0).message).to.equal(expectError.message);
    });


  });

});

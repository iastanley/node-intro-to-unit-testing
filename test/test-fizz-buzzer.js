const fizzBuzzer = require('../fizzBuzzer.js');

const should = require('chai').should();

describe('fizzBuzzer', () => {

  it('should return fizz-buzz if num % 15 === 0', () => {
    const expectedInputs = [0, 15, 30, 45, 1500, 225];

    expectedInputs.forEach((num) => {
      const answer = fizzBuzzer(num);
      answer.should.equal('fizz-buzz');
    });
  });

  it('should return buzz if num % 5 === 0', () => {
    const expectedInputs = [10, 20, 5, -5, 85];
    expectedInputs.forEach((num) => {
      const answer = fizzBuzzer(num);
      answer.should.equal('buzz');
    });
  });

  it('should return fizz if num % 3 === 0', () => {
    const expectedInputs = [3, -3, -6, 24];
    expectedInputs.forEach((num) => {
      const answer = fizzBuzzer(num);
      answer.should.equal('fizz');
    });
  });

  it('should return number if not divisible by 3, 5, or 15', () => {
    const expectedInputs = [1, 17, 68, -17];
    expectedInputs.forEach((num) => {
      const answer = fizzBuzzer(num);
      answer.should.equal(num);
    });
  });

  it('should throw error if args not number', () => {
    const notNumberInputs = ['1', true, 'aString', []];
    notNumberInputs.forEach((input) => {
      (function(){
        fizzBuzzer(input)
      }).should.throw(Error);
    });
  });

}); //end of unit test

const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', () => {
  it('should be a function', () => {
    const turn = new Turn();
    expect(turn).to.be.a('function');
  });

  it('should be an instance of a Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in a string that represents a user’s guess to the question as an argument', () => {
    const turn = new Turn('object');
    expect(turn.guess).to.be.a('string');
  });

  it('should take in a Card object as an argument for the current card in play', () => {
    const turn = new Turn('object', card);
    expect(card).to.be.an.instanceof(Card);
  });
});

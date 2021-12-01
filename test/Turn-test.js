const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card;
  let turn;

  beforeEach('setup', () => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in a string that represents a user’s guess to the question as an argument', () => {
    expect(turn.guess).to.be.a('string');
  });

  it('should take in a Card object as an argument for the current card in play', () => {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should return the guess', () => {
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the current card', () => {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should return true if the user guess matches the correct answer on the card, and should tell the user they guessed correctly', () => {
    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should return false if the user guess does not match the correct answer on the card, and should tell the user they guessed incorrectly', () => {

    turn = new Turn('array', card);

    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});

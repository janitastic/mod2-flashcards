const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
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
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(card).to.be.an.instanceof(Card);
  });

  it('should return the guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the current card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should return true if the user guess matches the correct answer on the card, and should tell the user they guessed correctly', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should return false if the user guess does not match the correct answer on the card, and should tell the user they guessed incorrectly', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});

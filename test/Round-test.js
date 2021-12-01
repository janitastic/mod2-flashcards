const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', () => {
  let card1, card2, card3, cards, deck, round;

  beforeEach('setup', () => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a deck of cards as an argument', () => {
    expect(round.deck).to.deep.equal(deck);
  });

  it('should start with 0 turns, and no incorrect guesses', () => {
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should be able to take turns guessing', () => {
    expect(round.turns).to.equal(0);
    round.takeTurn('object');
    expect(round.turns).to.equal(1);
  });

  it('should return the current card being played', () => {
    expect(round.returnCurrentCard()).to.deep.equal({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
  });

  it('should move on to the next card after a guess is made', () => {
    round.takeTurn('array');
    expect(round.returnCurrentCard()).to.deep.equal({id: 2, question: 'What is a comma-separated list of related values?', answers: ['array', 'object', 'function'], correctAnswer: 'array'});
  });

  it('should be able evaluate if a guess is correct', () => {
    expect(round.takeTurn('object')).to.equal('correct!');
  });

  it('should be able evaluate if a guess is incorrect', () => {
    expect(round.takeTurn('array')).to.equal('incorrect!');
  });

  it('should store incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
    round.takeTurn('array');
    expect(round.incorrectGuesses).to.deep.equal([1]);
    round.takeTurn('object');
    expect(round.incorrectGuesses).to.deep.equal([1, 2]);
  });

  it('should be able to calculate the percentage of questions answered correctly', () => {
    round.takeTurn('object');
    round.takeTurn('object');
    expect(round.calculatePercentCorrect()).to.equal(50);
    round.takeTurn('mutator method');
    expect(round.calculatePercentCorrect()).to.equal(66);
  });

  it('should print a message at the end of the round with the percentage of questions answered correctly', () => {
    round.takeTurn('object');
    round.takeTurn('array');
    round.takeTurn('mutator method');
    expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!');
  });
});

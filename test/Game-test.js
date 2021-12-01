const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe.only('Game', () => {
  // let card1;
  // let card2;
  // let card3;
  // let cards;
  // let deck;
  // let round;
  let game;
  //
  beforeEach('setup', () => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
    game = new Game(round);
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the currentRound', () => {
    expect(game.currentRound).to.deep.equal(round);
  });

  // it('should creates cards, put cards in a deck, creates a new Round using the Deck, and invokes printMessage & printQuestion', () => {
  //   game.start(deck.cards);
  //   expect(game.currentRound.deck[0]).to.equal({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
  //   expect(game.currentRound.deck).to.deep.equal([card1, card2, card3]);
  //   expect(game.currentRound).to.deep.equal(round);
  // });
});

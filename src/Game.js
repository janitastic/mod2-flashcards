const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Deck = require('./Deck');
const Card = require('./Card');
const Round = require('./Round');

class Game {
  constructor(round) {
    this.currentRound = round;
  }

  printMessage(deck) {
    console.log(`\n ** Welcome to FlashCards! **
    \n You are playing with ${deck.countCards()} cards.
    \n Instructions: When prompted with a question, select your answer and press enter.
    \n - You can make your selection either by entering the corresponding number digit followed by the enter key, or by using the up and down arrow keys followed by the enter key.
    \n - After receiving your response feedback, press the enter key again to continue to the next question.
    \n - To exit the game at any time, press 'ctrl + c' on your keyboard
    \n Happy studying! \n
-----------------------------------------------------------------------`)
  }

  start() {
    const cards = prototypeQuestions.map(card => {
      return card = new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;

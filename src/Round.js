const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);

    this.turns ++;

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard.id);
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const percent = Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);
    // console.log(percent);
    return percent;
  }

  endRound() {
    const percentCorrect = this.calculatePercentCorrect();
    console.log(`** Round over! ** You answered ${percentCorrect}% of the questions correctly!`);
    return `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`;
  }
}

module.exports = Round;

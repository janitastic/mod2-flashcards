const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.startTime = Date.now();
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
    return percent;
  }

  endRound() {
    const percentCorrect = this.calculatePercentCorrect();
    this.calculateTime();

    console.log(`** Round over! ** You answered ${percentCorrect}% of the questions correctly!
      \n--> To start over, press 'ctrl + c' then run the 'node index.js' command again. <--`);
    return `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`;
  }

  calculateTime() {
    let totalSeconds = (Date.now() - this.startTime) / 1000;
    let seconds = Math.round(totalSeconds % 60);
    let minutes = (totalSeconds - seconds) / 60;
    let secondsDisplay = parseInt(seconds);
    let minutesDisplay = parseInt(minutes);

    console.log(`\n*!*!* You completed the game in ${minutesDisplay} minute(s) and ${secondsDisplay} second(s) Try again to improve your score! *!*!*\n`);
    return `*!*!* You completed the game in ${minutesDisplay} minute(s) and ${secondsDisplay} second(s)! *!*!*`
  }
}

module.exports = Round;

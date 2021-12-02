# Mod 2 Flash Cards

### Need some help studying Mod 2 material?
These digital flashcards will quiz you on javascript arrays, objects, prototype methods, iterator methods, and more! Directly from your CLI (command line terminal)! You will have the opportunity to select an answer to each question, and be scored as correct or incorrect. 

No need to waste any more paper! It's the fast, and quick way to test your knowledge! 

## Demo

![flash cards example gif](https://github.com/janitastic/flashcards-upgrade/blob/main/flashcards.gif)

## Technologies Used

 - Javascript
 - Mocha testing framework
 - Chai assertion library
 - ESLint

## Install & Setup Instructions

- Clone down the forked repo (from your GitHub account). 
  - In your terminal, navigate into the directory that you want to save this repo.
  - Paste the `git clone` code below into your terminal. 

```bash
git clone git@github.com:janitastic/flashcards.git
```

Once you have cloned the repo, change into the newly cloned directory (flashcards).

```bash
cd flashcards
```

Install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Node server running on port 3000
Welcome to FlashCards! You are playing with 30 cards.
-----------------------------------------------------------
? What allows you to define a set of related information using key-value pairs? 
  1) object
  2) array
  3) function
  Answer: 

```

To exit the flashcards at any point, press ctrl + C on your keyboard in the terminal.

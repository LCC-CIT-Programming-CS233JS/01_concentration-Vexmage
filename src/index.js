// Create a class called Concentration.
class Concentration
{
    /*
        Add a constructor.  In the body of the constructor
        -   Create instance variables to replace the global variables
        -   Bind the class to each of the following methods
        -       this.showMatches = this.showMatches.bind(this);
        -       this.enableAllRemainingCards = this.enableAllCards.bind(this);
        -       this.enableAllRemainingCards = this.enableAllRemainingCards.bind(this);
        -       this.checkCards = this.checkCards.bind(this);
        -       this.disableAllCards = this.disableAllCards.bind(this);
        -       this.isMatch = this.isMatch.bind(this);     
        -   All of the functionality of init will happen in the constructor ... call init.
    */
    constructor() {
        this.imagePath = 'Cards/';
        this.images = Array(20).fill(null);
        this.firstPick = -1;
        this.secondPick = -1;
        this.matches = 0;
        this.tries = 0;

        this.showMatches = this.showMatches.bind(this);
        this.enableAllRemainingCards = this.enableAllCards.bind(this);
        this.enableAllRemainingCards = this.enableAllRemainingCards.bind(this);
        this.checkCards = this.checkCards.bind(this);
        this.disableAllCards = this.disableAllCards.bind(this);
        this.isMatch = this.isMatch.bind(this);     

        this.init();
    }

    init() {
        this.fillImages();
        this.shuffleImages();
        this.showMatches();
        this.enableAllCards();
        this.showAllBacks();
    }

    fillImages() {
        let values = ['a', 'k', 'q', 'j', 't', '9', '8', '7', '6', '5'];
        let suits = ['h', 's'];
        let index = 0;
        for (let value = 0; value < values.length; value++) {
            for (let suit = 0; suit < suits.length; suit++) {
                this.images[index] = "card" + values[value] + suits[suit] + ".jpg";
                index++;
            }
        }
    }

    shuffleImages() {
        for (let i = 0; i < this.images.length; i++) {
            let rnd = Math.floor(Math.random() * this.images.length);
            // The following would work but We're going to do destructuring assignment
            //let temp = this.images[i];
            //this.images[i] = this.images[rnd];
            //this.images[rnd] = temp;
            [this.images[i], this.images[rnd]] = [this.images[rnd], this.images[i]]; 
        }
    }

    showMatches() {
        document.getElementById("status").innerHTML = `Matches: ${this.matches} Tries: ${this.tries}`;
    }

    showBack(index) {
        let card = document.getElementById(index);
        let cardImage = this.imagePath + "black_back.jpg";
        card.style.backgroundImage = 'url(' + cardImage + ')';
    }

    showAllBacks() {
        let cards = document.getElementsByName("card");
        for (let i = 0; i < cards.length; i++) {
            this.showBack(i);
        }
    }
    enableAllCards() {
        let cards = document.getElementsByName("card");
        for (let i = 0; i < cards.length; i++) {
                cards[i].onclick = this.handleClick.bind(this, i);
                cards[i].style.cursor = 'pointer';
        }
    }
    enableAllRemainingCards() {
        let cards = document.getElementsByName("card");
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].style.backgroundImage !== 'none') {
                cards[i].onclick = this.handleClick.bind(this, i);
                cards[i].style.cursor = 'pointer';
            }
        }
    }

    handleClick(index) {
        let cardImage = this.imagePath + this.images[index];
        document.getElementById(index).style.backgroundImage = 'url(' + cardImage + ')';
        this.disableCard(index);
        if (this.firstPick == -1) {
            this.firstPick = index;
        } else {
            this.secondPick = index;
            this.disableAllCards();
            setTimeout(this.checkCards, 2000);
        }
    }

    disableCard(index) {
        let card = document.getElementById(index);
        card.onclick = null; 
        card.style.cursor = 'not-allowed';
    }

    disableAllCards() {
        let cards = document.getElementsByName("card");
        for (let i = 0; i < cards.length; i++) {
            this.disableCard(i);
        }
    }

    checkCards() {
        this.tries++;
        if (this.isMatch()) {
            this.matches++;
            this.removeCard(this.firstPick);
            this.removeCard(this.secondPick);
            if (this.matches < this.images.length - 1) {
                this.enableAllRemainingCards();
            } 
        } else{
            this.showBack(this.firstPick);
            this.showBack(this.secondPick);
            this.enableAllRemainingCards();
        }
        this.showMatches();
        this.firstPick = this.secondPick = -1;
    }

    isMatch() {
        let first = this.images[this.firstPick];
        let second = this.images[this.secondPick];
    
        return first.slice(4,5) == second.slice(4,5);
    }

    removeCard(index) {
        document.getElementById(index).style.backgroundImage = "none";
    }

    /*
        Convert each function to a method.  
        -   Move it inside the class.
        -   Remove the keyword function
        -   Add this. in front of every variable and method
        
        THREE OF THE METHODS CHANGE A LITTLE
        -   handleClick will now have a parameter, index
            -   remove the declaration / assignment of the local var index
        -   enableAllCards (and enableAllRemainingCards) have to pass the index to handleClick
            -   the line of code that calls bind must now pass both this and an index
            -   before: cards[i].onclick = this.handleClick.bind(this);
            -   should be: cards[i].onclick = this.handleClick.bind(this, i);
    */
}


// create a variable called concentration
// Add an event handler to the load event of the window. 
// Use an anonymous function or an arrow function to
// set the concentration variable to an instance of Concentration
let concentration;
window.onload = () => {new Concentration();}

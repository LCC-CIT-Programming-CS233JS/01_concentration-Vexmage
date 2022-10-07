// start with these global variables
// the folder where your card images are stored
var imagePath = 'Cards/';
// an array that stores the images for each card
var images = Array(20).fill(null);
// the index of the first card picked by the user
var firstPick = -1;
// the index of the second card picked by the user
var secondPick = -1;
// statistics about this "round"
var matches = 0;
var tries = 0;

// PART 1 //
// when the page loads, call the function init
window.onload = init;

// this function initializes the page
function init()
{
    // fill the array of images
    // shuffle them
    // show the number of matches on the page
    // enable all of the card elements on the page
    // show the backs of all of the cards
    fillImages();
    shuffleImages();
    showMatches();
    enableAllCards();
    showAllBacks();
}
// shows the number of matches and tries in the status element on the page

function showMatches() {
    document.getElementById("status").innerHTML = `Matches: ${matches} Tries: ${tries}`;
}
// fills the array images with 10 pairs of card filenames
// card filenames follow this pattern:  cardvs.jpg where
// v is the first char of the value of the card and 
// s is the first char of the suit of the card
// example:  cardjh.jpg is the jack of hearts
function fillImages() {
    var values = ['a', 'k', 'q', 'j', 't', '9', '8', '7', '6', '5'];
    var suits = ['h', 's'];
    var index = 0;
    for (var value = 0; value < values.length; value++) {
        for (var suit = 0; suit < suits.length; suit++) {
            images[index] = "card" + values[value] + suits[suit] + ".jpg";
            index++;
        }
    }
}

// shuffles the elements in the images array
function shuffleImages() {
    for (var i = 0; i < images.length; i++) {
        var rnd = Math.floor(Math.random() * images.length);
        var temp = images[i];
        images[i] = images[rnd];
        images[rnd] = temp;
    }
}

// assigns the handleclick function to the onclick event for all cards
// on the page.  All cards have the name attribute set to card.
// It also sets the cursor (part of the style) to 'pointer'
function enableAllCards() {
    var cards = document.getElementsByName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].onclick = handleClick;
        cards[i].style.cursor = 'pointer';
    }
}

// enables (see enable all) only the cards whose backgroundImage
// style property is not 'none'
function enableAllRemainingCards() {
    var cards = document.getElementsByName("card");
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].style.backgroundImage !== 'none') {
            cards[i].onclick = handleClick;
            cards[i].style.cursor = 'pointer';
        }
    }
}

// shows the back of one card based on its index
// each card has an id attribute set to its index in the html page
// the backgroundImage (style) is set to the url of the image
// for a card back to "show the back"
function showBack(index) {
    var card = document.getElementById(index);
    var cardImage = imagePath + "black_back.jpg";
    card.style.backgroundImage = 'url(' + cardImage + ')';
}

// shows the back for all cards
// calls showBack in the body of a for loop
function showAllBacks() {
    var cards = document.getElementsByName("card");
    for (var i = 0; i < cards.length; i++) {
        showBack(i);
    }
}
// END PART 1 - TEST THIS FAR //

// PART 2 //
// this is the function that fires when the user clicks on a card
function handleClick() {
    var index = parseInt(this.id);
    var cardImage = imagePath + images[index];
    this.style.backgroundImage = 'url(' + cardImage + ')';
    disableCard(index);
    
    if (firstPick == -1) {
        firstPick = index;
    } else {
        secondPick = index;
        disableAllCards();
        setTimeout(function () {
            checkCards();
        }, 2000);
    }

    // declare the variable index and assign it to the current card's id attribute
    // declare cardImage and assign it to the image for this card
    // set the backgroundImage to the url of the cardImage
    // disable the card 

    // if this is the first card picked
    //      assign firstPick to index
    // else
    //      assign secondPick to index
    //      disable all of the cards
    //      set a timer for 2 seconds.  Call checkCards when it fires.
    // end if
}

// disable one card based on it's index
function disableCard(index) {
    var card = document.getElementById(index);
    card.onclick = null; 
    card.style.cursor = 'not-allowed';
}

// disable all of the cards
function disableAllCards() {
    var cards = document.getElementsByName("card");
    for (var i = 0; i < cards.length; i++) {
        disableCard(i);
    }
}
// END PART 2 - TEST TO HERE //

// PART 3 //
// checks the 2 cards that have been picked for matches 
function checkCards() {
    tries++;
    if (isMatch()) {
        matches++;
        removeCard(firstPick);
        removeCard(secondPick);
        if (matches < images.length - 1) {
            enableAllRemainingCards();
        } 
    } else{
        showBack(firstPick);
        showBack(secondPick);
        enableAllRemainingCards();
    }
    showMatches();
    firstPick = secondPick = -1;

    // increment the number of tries
    // if the 2 cards match
    //      increment the number of matches
    //      remove the first(pick) card from the board
    //      remove the secon(pick) card from the board
    //      if there are cards on the board
    //          enable all of the remaining cards
    //      end if
    // else
    //      turn the first(pick) card back over
    //      turn the second(pick) card back over
    //      enable all of the remaining cards
    // end if
    // update the matches and tries on the page
    // reset the firstpick to -1
    // reset the secondpick to -1
}

// determines if the images in firstPick and secondPick are a matche
// 2 cards are a match if they have the same value
// cardvs.jpg is the pattern for card file names
function isMatch() {
    var first = images[firstPick];
    var second = images[secondPick];

    return first.slice(4,5) == second.slice(4,5);
}

// removes one card from the board based on it's index
// set the backgroundImage to 'none' to remove the card
function removeCard(index) {
    document.getElementById(index).style.backgroundImage = "none";
}
// END PART 3 - TEST THE ENTIRE APP //




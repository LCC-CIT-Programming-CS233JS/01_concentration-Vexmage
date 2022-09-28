// start with these global variables
// the folder where your card images are stored
var imagePath = 'Cards/';
// an array that stores the images for each card
var images = Array(19).fill(null);
// the index of the first card picked by the user
var firstPick = -1;
// the index of the second card picked by the user
var secondPick = -1;
// statistics about this "round"
var matches = 0;
var tries = 0;

// PART 1 //
// when the page loads, call the function init


// this function initializes the page
function init()
{
    // fill the array of images
    // shuffle them
    // show the number of matches on the page
    // enable all of the card elements on the page
    // show the backs of all of the cards
}

// shows the number of matches and tries in the status element on the page
function showMatches() {
    
}

// fills the array images with 10 pairs of card filenames
// card filenames follow this pattern:  cardvs.jpg where
// v is the first char of the value of the card and 
// s is the first char of the suit of the card
// example:  cardjh.jpg is the jack of hearts
function fillImages() {

}

// shuffles the elements in the images array
function shuffleImages() {

}

// assigns the handleclick function to the onclick event for all cards
// on the page.  All cards have the name attribute set to card.
// It also sets the cursor (part of the style) to 'pointer'
function enableAllCards() {

}

// enables (see enable all) only the cards whose backgroundImage
// style property is not 'none'
function enableAllRemainingCards() {

}

// shows the back of one card based on it's index
// each card has an id attribute set to it's index in the html page
// the backgroundImage (style) is set to the url of the image
// for a card back to "show the back"
function showBack(index) {

}

// shows the back for all cards
// calls showBack in the body of a for loop
function showAllBacks() {

}
// END PART 1 - TEST THIS FAR //

// PART 2 //
// this is the function that fires when the user clicks on a card
function handleClick() {
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
    card.onclick = () => {}; 
    card.style.cursor = 'none';
}

// disable all of the cards
function disableAllCards() {

}
// END PART 2 - TEST TO HERE //

// PART 3 //
// checks the 2 cards that have been picked for matches 
function checkCards() {
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

}

// removes one card from the board based on it's index
// set the backgroundImage to 'none' to remove the card
function removeCard(index) {

}
// END PART 3 - TEST THE ENTIRE APP //




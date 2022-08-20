//she usually only starts with cards numbered 1 to 10, although some of the //tricks may involve additional cards.
//Array Destructuring  - moving around elements
//Arrays, Rest, Spread

//The rest parameter syntax allows a function to accept an indefinite number //of arguments as an array, providing a way to represent variadic functions //in JavaScript.

//Get the first card
function getFirstCard(deck){
  //rest
  var [first, ...d] = deck;
  return first;
  //second way
  // let firstItem = deck.find(element => element !=undefined);
   //return firstItem;
   //Another way
	 //return deck.splice(0,1);

}

//Get the second card
function getSecondCard(deck){
  //rest
  //var [second, ...d] = deck.splice(1,1);
  //another way
  var[first,second,...d] = deck;
  //return d;//[7,1,8]
  return second;
  }

//Swap the first two cards
function swapTopTwoCards(deck){
var[first,second,...d]=deck;// 10,7,[3,8,5]
var combined = [second,first,...d]; //[7,10,3,8,5]
return combined;
}

//Discard the top card
function discardTopCard(deck){
var[first,...d]=deck;
var arr = [first,[...d]];//new array
return arr;
}

//Insert face cards use spread
function insertFaceCards(deck){
//// => [5, 'jack', 'queen', 'king', 4, 7, 10]
var faces = ['jack','queen', 'king'];
var[first,...d]=deck;
//...faces grabs only the elements not the entire array with brackets
var newArr = [first,...faces,...d];//new array
return newArr;
}

const deck = [5, 9, 7, 1, 8];
const swapDeck = [10, 7, 3, 8, 5];
const discardDeck = [2, 5, 4, 9, 3];
const insertDeck = [5, 4, 7, 10];


console.log(getFirstCard(deck));

console.log(getSecondCard(deck));

console.log(swapTopTwoCards(swapDeck));

console.log(discardTopCard(discardDeck));

console.log(insertFaceCards(insertDeck));

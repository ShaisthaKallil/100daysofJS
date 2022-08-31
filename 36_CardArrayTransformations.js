//::::::::::::::::::::::CARD TRANSFORMATIONS::::::::::::::::::::::::::://
/////////////////////////////////////////////////////////////////////////

//Array Transformations
//'Array' class comes with many built-in methods for transforming arrays
//'PURE METHODS' - Doesnot modify the original array, return new one instead
//resulting array always the same length as the original
//Other methods manipulates the array itself


//DOUBLE EVERY SINGLE CARD
function seeingDouble(deck){
 const doubles = deck.map((val) => val*2);
 return doubles;
}
//const deck = [1, 2, 3, 4, 10];
//console.log(seeingDouble(deck));
// => [2, 4, 6, 8, 20]

//CREATE MULTIPLE COPIES OF EVERY 3 FOUND IN THE DECK
function threeOfEachThree(decks){
	return decks.flatMap(x => x===3 ? [3,3,3] : x);
}

//const deck = [1, 3, 9, 3, 7];
//console.log(threeOfEachThree(deck));
// => [1, 3, 3, 3, 9, 3, 3, 3, 7]

//FIND TWO CARDS FROM THE EXACT MIDDLE OF THE DECK
function middleTwo(deck){
  let len = deck.length;
  let middleIndex = (len/2) - 1;
  let skipIndex = middleIndex + 2;
  return deck.slice(middleIndex, skipIndex);


}
//const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(middleTwo(deck));
// => [5, 6]

//THE OUTSIDE 2 CARDS WILL REAPPEAR IN THE MIDDLE OF THE DECK
//Elyse wants to move the top and bottom cards of the deck into the middle, in reverse order.
//You can assume that the deck has an even number of cards.
function sandwichTrick(deck){
  let middle = deck.length/2 -1;

  //remove from the original array
  let secondCardRem = deck.splice(0,1);
  let firstCardRem = deck.splice(deck.length - 1, 1);


  //insert vals to middle
  deck.splice(middle,0,...firstCardRem,...secondCardRem);

  return deck;

}
//const deck = [1, 2, 3, 5, 6, 10];
//console.log(sandwichTrick(deck));
// => [2, 3, 10, 1, 5, 6]

//EVERY CARD THAT IS NOT 2 DISAPPEARS
function twoIsSpecial(deck){
	return deck.filter((val) => val === 2);
}

//const deck = [1, 2, 3, 4, 10, 2];
//console.log(twoIsSpecial(deck));
// => [2, 2]

//CONVERT SHUFFLED DECK INTO PERFECTLY ORDERED DECK
//Elyse wishes to demonstrate her mastery of reordering the cards perfectly - no matter how well shuffled.
function perfectlyOrdered(deck){
  //true or false inside function
	return deck.sort((nump,numn) => nump - numn );
}


const deck = [10, 1, 5, 3, 2, 8, 7];
console.log(perfectlyOrdered(deck));
// => [1, 2, 3, 5, 7, 8, 10]

//REORDER THE DECK
function reorder(deck){

 return deck.reverse();

}
//const deck =  [10, 1, 5, 3, 2];
//console.log(reorder(deck));
// => [2, 3, 5, 1, 10]







//Method 1::::::::::::::::::
//map () this is 'pure'
//A new array is created by passing each element of original array through a
//function. These functions are called 'callback functions' use arrow fcns
//const arr = [1,2,3,4];

//const newArr = arr.map((value) => value - 1);

//console.log(newArr); //[0,1,2,3]

//Method 2:::::::::::::::::::
//filter () this is 'pure'
//sends each element in array through a filter function to check whether
//condition satifies (true?false) if yes, new array has those values

//const letters = ['s', 'b', 'c', 'b','d','a','i'];

//const newlett = letters.filter((let) => let =='b');

//console.log(newlett);

//Method 3:::::::::::::::::::
//reduce () this is pure 2 params arrow fcn
//Reduces the array to a single value using a function
//that takes an accumulator and the current element of the array as parameters. This function instructs how the current element must be merged into the accumulator and returns the accumulator that will be used on the next iteration.

//let arr = [1,2,3,4];
//arr.reducd((accumulator,currentvalue) => accumulator + currenvalue);
//10

//Method 4::::::::::::::::::::::
//reverse() original array modified
//reverses elements of an array
//arr.reverse();

//Method 5::::::::::::::::::::::
//slice () this is pure
//start and end index given create subarray from original
//End index value not included
//if only 1 param, +ve take out that many numbers from start if -ve from end
//const arr = [1, 2, 3, 4];
//console.log(arr.slice(1, 2)); // [2]
//arr.slice(1); // [2, 3, 4]
// You can also use negative numbers, that represent the indexes
// starting from the end of the array
//arr.slice(-2); // [3, 4]


//Method 6:::::::::::::::::::::::::
//splice()
//remove,repleace, adds new elements to array
//the index of the element where to start modifying the array
//the number of elements to delete
//the elements to insert in the array (optional)
//arr.splice(start_index,numitemsremoved,insertvals)

//const arr = ['1', '2', '5', '6'];

// Insert an element at index 2
//arr.splice(2, 0, '3');
//console.log(arr);
// => ['1', '2', '3', '5', '6']

// Remove 2 elements, starting at index 3 and insert 2 elements
//const removed = arr.splice(3, 2, '4', '5');
//console.log(removed);
// => ['5', '6']
//console.log(arr);
// => ['1', '2', '3', '4', '5']

// Remove 1 element at index 1
//arr.splice(1, 1);
//console.log(arr);
// => ['1', '3', '4', '5']

//Method 7 ::::::::::::::::::::::::
//Sort()
//original array modified, also returns sorted array
//const arr = ['b','a','c'];
//console.log(arr.sort());
//console.log(arr);

//Determine how many cards of a certain type are in the deck
//for - loops through a block of code a number of times
//for/in - loops through the properties of an object
//for/of - loops through the values of an iterable object

//array.forEach(function(currentValue, index, arr), thisValue)
function cardTypeCheck(deck,cardType){
  let counter = 0;
  //item is parameter that is each item in the deck
	deck.forEach((item) => {
  	if(item === cardType){
    	counter++;
    }

  });
  return counter;
}

//Determine how many odd or even cards there are
//if parameter true return num of evens if false return num of odds
function determineOddEvenCards(deck,bool){
  let countEven = 0;
  let countOdd = 0;


 /* for(let num of deck){
     if(num %2 ==0){
     	countEven++;
     }else{
      countOdd++;
     }
  }
 if(bool == true){
 	return countEven;
 }else{
 	return countOdd;
 }*/
 //Another way
 for(let num of deck){
   num %2 === 0 ? countEven++ : countOdd++;
 }
 return bool ? countEven : countOdd;

}

const cardType = 3;
console.log(cardTypeCheck([1, 2, 3, 4], cardType));//1

console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], true));//2

console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], false));//4

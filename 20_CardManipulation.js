//All about array element manipulation, splice method
//Card manipulation for 10 cards

//Retrieve a card from stack
function getItem(arr,pos){

	return arr.at(pos);

}

//Exchange a card in the stack
function setItem(arr,pos,replaceCard){
  //arr[pos] = replaceCard;
  //position, how many, value
  arr.splice(pos,1,replaceCard);
return arr;
}

//Insert a card at the top of the stack
function insertItemAtTop(arr,newCard){
  arr.push(newCard);

  return arr;
}

//Remove a card from the stack
function removeItem(arr,pos){
  //removes 1 element from pos in array
	arr.splice(pos,1);
  return arr;
}

//Remove top card from stack
function removeItemFromTop(arr){
  arr.pop();
	return arr;
}

//Insert a card at the bottom of the stack
function insertItemAtBottom(arr,newCard){
  arr.splice(0,0,newCard);
  return arr;
}

//Remove a card from the bottome of the stack
function removeItemAtBottom(arr){
	arr.splice(0,1);
  return arr;
}

//Check the size of the stack - return boolean
function checkSizeOfStack(arr,stackSize){
	var len = arr.length;
  if(len != stackSize){
  	return false;
  }else{
  	return true;
  }

}

const position = 2;
const replacementCard = 6;
const newCard = 8;
const stackSize = 5;



console.log(getItem([1, 2, 4, 1], position));

console.log(setItem([1, 2, 4, 1], position, replacementCard));

console.log(insertItemAtTop([5, 9, 7, 1], newCard));

console.log(removeItem([3, 2, 6, 4, 8], position));

console.log(removeItemFromTop([3, 2, 6, 4, 8]));

console.log(insertItemAtBottom([5, 9, 7, 1], newCard));

console.log(removeItemAtBottom([8, 5, 9, 7, 1]));

console.log(checkSizeOfStack([3, 2, 6, 4, 8], stackSize));

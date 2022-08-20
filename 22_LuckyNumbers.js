//Calculate the sum for the numbers on the slot machine
//twoSum([1, 2, 3], [0, 7]);
//=> 130
// [1, 2, 3] represents 123 and [0, 7] represents 7.
// 123 + 7 = 130
//Above each array interpreted as 1 number

function twoSum(numArrx, numArry){
	let sum = 0;
  sum = parseInt(numArrx.join('')) + parseInt(numArry.join(''));
	return sum;
}

//Determine if a number is a palindrome
//luckyNumber(1441);
//=>  true
//luckyNumber(123);
//=> false

function luckyNumber(val){
 let num = (""+val).split("").reverse().join('');
 if(val == num){
 	return true;
 }else{
 	return false;
 }
 }

 //Generate an error message for invalid user input
 //errorMessage('123');
// => ''
//errorMessage('');
// => 'Required field'
//errorMessage('abc');
// => 'Must be a number besides 0'

function errorMessage(input){
	if(input == ''){
  	return 'Required Field'
  }else if(typeof input === 'string'){
  	if(Number.isInteger(parseInt(input))){
    	return '';
    }else{
    	return 'Must be a number besides 0';
    }
  }else{
  	return 'undefined';
  }
}

console.log(twoSum([1, 2, 3], [0, 7]));

console.log(luckyNumber(1441));

console.log(errorMessage(''));

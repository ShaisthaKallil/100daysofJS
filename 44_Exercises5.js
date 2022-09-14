//EXERCISE 1

/********************* Returning the next number******************/
///////////////////////////////////////////////////////////////////

/*Create a function that takes a number as an argument, increments the number by +1 and returns the result.

Examples
addition(0) ➞ 1

addition(9) ➞ 10

addition(-3) ➞ -2
Notes
Don't forget to return the result.*/

function addition(num){

	return num+1;

}

console.log(addition(0));

//EXERCISE 2

/******************FIND THE TIME ***********************/
/////////////////////////////////////////////////////////

/*The time has a format: hours:minutes. Both hours and minutes has two digits, like 09:00.

Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.*/

function timeIn(str){

	const regex = /[0-9][0-9]:[0-9][0-9]/;
  return str.match(regex);

}
console.log(timeIn("Breakfast at 09:00 in the room 123:456"));

//EXERCISE 4

/**************************Left Shift by Powers of Two*********/
///////////////////////////////////////////////////////////////

/*The left shift operation is similar to multiplication by powers of two.

Sample calculation using the left shift operator (<<):

10 << 3 = 10 * 2^3 = 10 * 8 = 80
-32 << 2 = -32 * 2^2 = -32 * 4 = -128
5 << 2 = 5 * 2^2 = 5 * 4 = 20
Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

Examples
shiftToLeft(5, 2) ➞ 20

shiftToLeft(10, 3) ➞ 80

shiftToLeft(-32, 2) ➞ -128

shiftToLeft(-6, 5) ➞ -192

shiftToLeft(12, 4) ➞ 192

shiftToLeft(46, 6) ➞ 2944*/

function shiftToLeft(num1,num2){

	return num1 * Math.pow(2,num2);

}

console.log(shiftToLeft(-32,2));

//EXERCISE 5

/*************Add up the numbers from a single number ******/
/////////////////////////////////////////////////////////////

/*Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
Notes
Expect any positive number between 1 and 1000.*/

function addUp(nums){
  var sum = 0;
	for(let i = 1; i<=nums; i++){
    sum += i;
  }

  return sum;


}
console.log(addUp(600));

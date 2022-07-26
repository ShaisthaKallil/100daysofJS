// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

  let vowel = ['a','e','i','o','u'];

  let count = 0;

  //creates an array arrstr with all letters in str
	let arrstr = str.split('');

  //Loops through string to look and update vowel values  
    for(let i = 0;i<vowel.length;i++){

   		for(let j= 0;j<str.length;j++) {

      	if(vowel[i]== arrstr[j]){

       		count +=1;

        }else{

        	continue;

        }

      }
     }
     return count;


}

console.log(vowels('Why?'));

/////////EXERCISE 1//////////////
// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function myFunction(a, n){

//return a.split('').splice(n-1,1)[0];
return a[n-1];
}
console.log(myFunction('abcd',1));

//////////EXERCISE 2 //////////////
// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists
function myFunction2(a, b){

return a.hasOwnProperty(b);
//return b in a;
}
console.log(myFunction2({a:1,b:2,c:3},'b'));
console.log(myFunction2({x:'a',y:'b',z:undefined},'z'));

///////////EXERCISE 3 ////////////////
// Write a function that takes a value as argument
// Return the type of the value
function myFunction3(a){

return typeof a;
}

console.log(myFunction3(null));


///////////EXERCISE 4 /////////////
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
function myFunction4(a, b)
{
   return a === b? true : false;
   //return a===b;
}

console.log(myFunction4(3,3));

//////////EXERCISE 5 ////////////////
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
function myFunction5(obj){

//return obj['country'];
return obj.country;
}

console.log(myFunction5({ continent: 'Asia', country: 'Japan' }));

//////////EXERCISE 6 ///////////////
// Write a function that takes an array (a) as argument
// Return the number of elements in a
function myFunction6(a){

return a.length;
}

console.log(myFunction6([1,2,2,4]));

///////////EXERCISE 7 /////////////////
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function myFunction7(str){

return str.substr(str.length-3,str.length-1);
//return str.slice(-3);
}

console.log(myFunction7('abcdefg'));

///////////EXERCISE 8 //////////////////////
// Write a function that takes a string as argument
// Create an object that has a property with key 'key' and a value equal to the string
// Return the object
function myFunction8(a)
{

return {key:a};
}

console.log(myFunction8('z'));

/////////////EXERCISE 9 /////////////////
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
function myFunction9(a){

return a.slice(0,3);
}

console.log(myFunction9('abcdefg'));

///////////////EXERCISE 10 ////////////////
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
function myFunction10(arr){

return arr.sort();
}

console.log(myFunction10(['b', 'c', 'd', 'a']));


////////////////EXERCISE 11/////////////
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
function myFunctiono(obj, key){

return obj[key];
}

console.log(myFunctiono({  continent: 'Asia',  country: 'Japan'}, 'continent'));


///////////EXERCISE 12///////////////
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
function myFunctiona(a){

return a.splice(3);
}

console.log(myFunctiona([5,4,3]));


/////////////EXERCISE 13////////////////
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
function myFunctionb(a){

return a.slice(0,3);
}

console.log(myFunctionb([1,2,3,4]));


///////////////EXERCISE 14////////////////
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of 'a'
// Return the resulting array
function myFunctionc(a){

return a.slice(-3);
}

console.log(myFunctionc([1,2,3,4]));

///////////////EXERCISE 15////////////////
// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set
function myFunctionz(set, val){

	return set.has(val);
}

console.log(myFunctionz(new Set([1, 2, 3]), 2));

///////////////EXERCISE 16////////////////
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function myFunctiony(a, b){

	return a<b ? a/b : a*b;
}

console.log(myFunctiony(10, 100));

///////////////EXERCISE 17////////////////
// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise
function myFunctionx(a, b){
	return b in a && ( a[b] != null || a[b] != undefined) ? true : false;

  // return Boolean(a[b]);
}

console.log(myFunctionx({a:1,b:2,c:3},'b'));

///////////////EXERCISE 18////////////////
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function myFunctionw(a){

	return a.slice(3);
}

console.log(myFunctionw('abcdefg'));

///////////////EXERCISE 19////////////////
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
function myFunctionv(a, n){

	return a[n-1];
}

console.log(myFunctionv([1,2,3,4,5],3));

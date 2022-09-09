//:::::::::::::::::::::::PANGRAM::::::::::::::::::::::::://
///////////////////////////////////////////////////////////

/*Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is:

The quick brown fox jumps over the lazy dog.

The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.*/

const str = "The quick brown fox jumps over the lazy dog.";
const lowStr = str.toLowerCase();
const reg = /[a-z]/gi;
//test must equal 26
const test = [...new Set(lowStr.match(reg))].length;
console.log(test==26? "This is pangram":"This is not pangram");

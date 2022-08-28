//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//::::::::::::::::::::::::TWO FER:::::::::::::::::::::::::::::::::::::::::://
/////////////////////////////////////////////////////////////////////////////


/*******INSTRUCTION*************/

// Two-for-One, one for you and one for me

//Given a name, return a string with the message:

//One for name, one for me.
//Where "name" is the given name.

//However, if the name is missing, return the string:

//One for you, one for me.

//Code

//Declare the name

function strShare(name) {

  return !name ? "One for you, one for me" : "One for " + name + ", one for me";
}

console.log(strShare("Alice"));
// "One for Alice, one for me"

console.log(strShare());
// "One for you, one for me"

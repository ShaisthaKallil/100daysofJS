//::::::::::::::::::::::::::RESISTOR COLOR::::::::::::::::::::::::::::::://
///////////////////////////////////////////////////////////////////////////

//The goal of this exercise is to create a way:

//=== to look up the numerical value associated with a particular color band
//=== to list the different band colors

/**
: This function returns the numeric value associated with the color called
:
:@param {string} color
:
:@return {string} {number{}}
:
*/
function colorCodeNumVal(color){
  let colorArr =  color.split('');
  let colorKey =  colorArr[0].toUpperCase() + colorArr.slice(1).join('');
  return  color + " : "+colors[colorKey];

}

/**
: This function returns the list of color bands
:
:@return {Array} of strings
:
*/
function listBandColors(){
    return Object.keys(colors);
}



  const colors = {
	Black: 0,
	Brown: 1,
	Red: 2,
	Orange: 3,
	Yellow: 4,
	Green: 5,
	Blue: 6,
	Violet: 7,
	Grey: 8,
	White: 9

};

console.log(colorCodeNumVal('brown'));
console.log(listBandColors());

/*If you want to build something using a Raspberry Pi, you'll probably use resistors. For this exercise, you need to know two things about them:

Each resistor has a resistance value.
Resistors are small - so small in fact that if you printed the resistance value on them, it would be hard to read.
To get around this problem, manufacturers print color-coded bands onto the resistors to denote their resistance values. Each band has a position and a numeric value.

The first 2 bands of a resistor have a simple encoding scheme: each color maps to a single number.

In this exercise you are going to create a helpful program so that you don't have to remember the values of the bands.*/

///////////:::::::::::::;HIGH SCORE BOARD:::::::::::::::::::::///////
/////////////////////////////////////////////////////////////////////

//** OBJECTS **//
////////////////

//Implement a way to keep track of the high scores for the most popular game in your local arcade hall.

//CREATE A NEW HIGH SCORE BOARD

function createScoreBoard(){
	const scoreBoard = {
  	name: 'The Best Ever',
    score: 1000000
    };

  //returns object
  return scoreBoard;
  //Use of helper method, returns array
  //return Object.entries(scoreBoard);
}

//ADD PLAYERS TO A SCORE BOARD
/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} existObj
 * @param {string} newName
 * @param {number} newScore
 * @returns {Record<string, number>} updated existObj
 */
function addPlayer(existObj, newName, newScore){
  //Shows way to grab key and its value from unknown obj
	//let existName = Object.keys(existObj);
 // let existScore = existObj[existName[0]];
  existObj[newName] = newScore;
  return existObj;
}

//REMOVE PLAYERS FROM A SCORE BOARD
/**
: @param {Record<string, number>} existObj
: @param {string} remPlayer
: @return {Record<string, number>} updated existObj
*/
function removePlayer(existObj, remPlayer){
  	delete existObj[remPlayer];
    return existObj;

}

//INCREASE A PLAYER'S SCORE
/**
: @param {Record<string, number>} existObj
: @param {string} name
: @param @return {Record<string, number>} updated existObj
*/
function updateScore(existObj, name, addScore){
  existObj[name] += addScore;
  return existObj;
}


//APPLY MONDAY BONUS POINTS +100
/**
:@param {Record<string, number>} existObj
:@param @return {Record<string, number>} updated existObj
*/
function applyMondayBonus(existObj){
//Loop through object
	for (let key in existObj ) {
   //or can call updateScore function from above
  	existObj[key] += 100;
  }

  return existObj;
}


//Write a function normalizeScore. To practice your object skills, instead of two parameters this function should accept one object as a parameter. That object contains a key score with the value being a player's score (a number). There is also a second key normalizeFunction that has a function as its value. This function takes a score as an argument and returns the corrected score.

//Your function normalizeScore should return the normalized score that you get after applying the normalization function to the score that was passed in.


//NORMALIZE A HIGH SCORE
function normalizeScore(params){

	return normalize(params.score);

}
function normalize(score) {
  return 2 * score + 10;
}


console.log(createScoreBoard());
//// returns an object with one initial entry
////The Best Ever ,  1000000

console.log(addPlayer({ 'Dave Thomas': 0 }, 'José Valim', 486373));
// => {'Dave Thomas': 0, 'José Valim': 486373}

//console.log(removePlayer({ 'Dave Thomas': 0 }, 'Dave Thomas'));
// => {}

console.log(removePlayer({ 'Dave Thomas': 0 }, 'Rose Fanaras'));
// => { 'Dave Thomas': 0 }

console.log(updateScore({ 'Freyja Ćirić': 12771008 }, 'Freyja Ćirić', 73));
// => {"Freyja Ćirić", 12771081}

const scoreBoard = {
  'Dave Thomas': 44,
  'Freyja Ćirić': 539,
  'José Valim': 265,
};

console.log(applyMondayBonus(scoreBoard));
// => { 'Dave Thomas': 144, 'Freyja Ćirić': 639, 'José Valim': 365 }

const params = { score: 400, normalizeFunction: normalize };
console.log(normalizeScore(params));
// => 810

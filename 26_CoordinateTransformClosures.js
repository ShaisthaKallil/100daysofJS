//a decision is made to start using JavaScript to perform some (CSS transformation for webpages) calculations dynamically.
//a function closure to create reusable transformation for {x, y} coordinate pairs.

//TRANSLATE THE COORDINATES
//This function returns a function using closure to perform repeatable 2d translation for coordination pair
function translate2d(x,y){
 return function moveCoordinatesRigh2Px(m,n){
  return [x+m,y+n];
 };
}

//SCALE THE COORDINATES
//scale2d function that returns a function making use of a closure to perform a repeatable 2d scale of a coordinate pair. Only +ve scaling values
function scale2d(x,y){
  return function doubleScale(m,n){
  	return [x*m, y*n];
  };
}

//COMPOSE TRANSFORMATION FUNCTIONS
//first function 'f(x)' is used as the input to the second function 'g(x)'.
//compose = (f1, f2) => value => f2( f1(value) );
function composeTransformation(f,g){
	return (x,y)=> {
  	//return g(f(x,y)[0],f(x,y)[1]);
    return g(...f(x,y));
  }
}

//SAVE THE RESULTS OF FUNCTIONS
//Implement the memoizeTransform function. It takes a function to memoize, then returns a new function that remembers the inputs to the supplied function so that the last return value can be "remembered" and only calculated once if it is called again with the same arguments.
function memoizeTransform(f){
	return (x,y) =>{
    let prevX,prevY,prevResult;
    if(prevX === x && prevY === y){
    	return prevResult;
    }

    prevX = x;
    prevY = y;
    prevResult = f(x,y);
    return prevResult;
  }
}

const moveCoordinatesRight2Px = translate2d(2, 0);
const moveresult = moveCoordinatesRight2Px(4, 8);
console.log(moveresult);
// result => [6, 8]


const doubleScale = scale2d(2, 2);
const doubleresult = doubleScale(6, -3);
console.log(doubleresult);
// result => [12, -6]


const doubleCoordinates = scale2d(2, 2);
const composedTransformations = composeTransformation(
  moveCoordinatesRight2Px,
  doubleCoordinates
);
const transformresult = composedTransformations(0, 1);
console.log(transformresult);
// result => [4, 2]

const tripleScale = scale2d(3, 3);
const memoizedScale = memoizeTransform(tripleScale);

console.log(memoizedScale(4, 3)); // => [12, 9], this is computed since it hasn't been computed before for the arguments
console.log(memoizedScale(4, 3)); // => [12, 9], this is remembered, since it was computed already

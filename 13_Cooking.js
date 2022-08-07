//Cooking lasagna
//Calculates variation in times in minutes

//Expected time in the oven to fully bake

const BAKE_TIME = 40;

//Return remaining time to finish baking

function remainingOven (timeNow){
  return BAKE_TIME - timeNow;
}

//Return time minutes to complete needed layers of lasagna assume 2min/layer
function preparationLasagna (layers){
  return layers * 2;
}

//Return added sum of time taken to prepare number of layers and current baking
//time in minutes in the oven
function totalTimeMinutes (numLayers, inOvenTime){
    return preparationLasagna(numLayers)+inOvenTime;

}

var bakeTimeLeft = remainingOven(30);
var timeLayers = preparationLasagna(2);
var totalTimeNow = totalTimeMinutes(3,20);

console.log(totalTimeNow);

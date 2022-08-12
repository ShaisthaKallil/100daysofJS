
//Total number of birds counted so far
//Counts total number of birds from birds seen each day
function totalBirdCount(birdsperday){
	let totalBirds = 0;

  for(let i = 0; i< birdsperday.length; i++){
  	totalBirds += birdsperday[i];
  }

return totalBirds;
}

//Number of visiting birds in a specific week

function birdsInWeek(birdsdaily, weeknum){

let weekdays = [];
let weekcount = 0;

//let startindex =birdsdaily.length - (7*(weeknum-1));
let startindex =(7*(weeknum-1));


	//for(let i = (birdsdaily.length-(weeknum*7)); i < birdsdaily.length-1;i++)
  for(let i = startindex; i < startindex+7; i++)
  {
				weekcount += birdsdaily[i];
    }


return weekcount;

}

// add 1 to every other array element
function fixbirdcountlog(birdday){

	for(let i = 0; i<birdday.length; i+=2){
      birdday[i] = birdday[i] + 1;
  }
  return birdday;
}
//console.log(totalBirdCount([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]));

//console.log(birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1],2));

console.log(fixbirdcountlog([2, 5, 0, 7, 4, 1]));

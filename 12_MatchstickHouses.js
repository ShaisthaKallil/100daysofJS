//6 matchsticks to build 1 house
//number of matchsticks used varies in adjacent houses
//return number of matchsticks need to build number of houses.


function matchSticks(num_house){
	let matchSticks = 0;
  const num = num_house -1;

  if (num_house==1){
  	return 6;
  }else if(num_house>1){
  	matchSticks = (num_house*6)- num;
    return matchSticks;
  }

  return " 0 No sticks needed."


}

console.log("The number of houses build is "+matchSticks(1));

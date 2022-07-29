//Function takes minutes(int) and converts to seconds
// convert(5) ➞ 300
//
// convert(3) ➞ 180
//
// convert(2) ➞ 120


function convertMin(minutes){

  // 1 minute = 60 seconds
  let seconds = 0;

  seconds = minutes * 60;

  return seconds;
}
console.log(convertMin(2));

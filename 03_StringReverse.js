/*******************/
/*String Reversal*/
/*July 21,2022*/
/*Return the given string in reversed characters*/
/*1,1,2,3,5,8*/
/*******************/

//Create function reverse with str arg

function reverse(str){
  let strArr;
  let revArr=[];
  let count = 1;
  strArr = str.split("");
  for(let i=0; i<str.length;i++){
     revArr[i] = strArr[str.length-count];
     count++;
  }


  return revArr.join('');

}


console.log(reverse('Greetings!'));

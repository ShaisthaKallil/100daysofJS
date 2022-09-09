//:::::::::::::::::::::::Format Math Equation::::::::::::::::::::::::://
///////////////////////////////////////////////////////////////////////////////

/*Given a simple math expression as a string, neatly format it as an equation.

Examples
formatMath("3 + 4") ➞ "3 + 4 = 7"

formatMath("3 - 2") ➞ "3 - 2 = 1"

formatMath("4 x 5") ➞ "4 x 5 = 20"

formatMath("6 / 3") ➞ "6 / 3 = 2"
Notes
You will need to deal with addition, subtraction, multiplication and division.
Division will have whole number answers (and will obviously not involve 0).*/


function formatMat(numStr){
  let sum;
  var numStrArr = numStr.split(' ');
  if(numStrArr[1]=='+'){
  sum = parseInt(numStrArr[0])+ parseInt(numStrArr[2]);
  return numStr + " = " + sum;
  }else if (numStrArr[1]=='-'){
   sum = parseInt(numStrArr[0])- parseInt(numStrArr[2]);
  return numStr + " = " + sum;
  }else if(numStrArr[1]=='x'){
  sum = parseInt(numStrArr[0]) * parseInt(numStrArr[2]);
  return numStr + " = " + sum;
  }else{
    sum = parseInt(numStrArr[0]) / parseInt(numStrArr[2]);
  	if(sum != Infinity && sum !=0){
    	 return numStr + " = " + sum;
    }else{
        return "Zeros not allowed";
    }
  }
}

console.log(formatMat("6 / 2"));


//////////////////::::::::::::::Parity:::::::::::::::::::::::::////
///////////////////////////////////////////////////////////////////
function findOutlier(integers){
  //your code here - BOTH SOLUTION CORRECT
 /* let temp;
  var newEvenArr=[];
  var newOddArr=[];

  for(let i = 0; i < integers.length; i++){
   if(integers[i]%2 === 0){
   	newEvenArr.push(integers[i]);
    }else{
    newOddArr.push(integers[i]);
   }

  }

  if (newEvenArr.length > newOddArr.length){
   	return newOddArr[0];
   }else{
   	return newEvenArr[0];
   }*/

   //ANOTHER WAY
   let even = integers.filter(num => num%2===0);//array of even nums
   let odd = integers.filter(num => num%2!==0);//array of odd nums
   return even.length===1? even[0]:odd[0]; //choose var with only 1 element


}
console.log(findOutlier([1,5,7,10,3]));//returns 10

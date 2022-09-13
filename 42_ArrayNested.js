/*:::::::::::::::::::Array Nested Into Another:::::::::::::::::::::::::::::*/
////////////////////////////////////////////////////////////////////////

/*Instructions
Create a function that returns true if the first array can be nested inside the second.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.
Examples
canNest([1, 2, 3, 4], [0, 6]) ➞ true

canNest([3, 1], [4, 0]) ➞ true

canNest([9, 9, 8], [8, 9]) ➞ false

canNest([1, 2, 3, 4], [2, 3]) ➞ false
*/

function canNest(arr1, arr2){
	var ascArr1 = arr1.sort();
  var arr1len = arr1.length;
  var ascArr2 = arr2.sort();
  var arr2len = arr2.length;

  if((arr1[0]>arr2[0])&&(arr1[arr1len-1]<arr2[arr2len-1])){
       return true;
  }else{
       return false;
  }
}

console.log(canNest([4,3,1],[2,0]));

//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//Input: nums = [3,2,4], target = 6
//Output: [1,2]
//Input: nums = [3,3], target = 6
//Output: [0,1]


function twosum(arr, target){

  for (let i = 0; i<arr.length; i++){

     for (let j = 1; j<arr.length; j++){

     	if ((arr[i]+arr[j])==target){
      	return [i,j]
      }else{
      	continue;
      }
     }
  }

}

console.log(twosum([3,3], 6));

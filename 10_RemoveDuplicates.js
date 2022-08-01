

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]


var removeDuplicates = function(nums) {

   let newArr = [];
   let preArr = nums;
   let lastEle = nums[nums.length - 1];


   for(let i = 0;i<nums.length; i++){
   	for(let j= 1; j<nums.length; j++){

       if(nums[i] == preArr[j]){
           preArr.splice(i,1);

        }else{
           continue;
        }

       }
    }
   preArr.push(lastEle);
   return preArr;
};

var arr = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(arr));

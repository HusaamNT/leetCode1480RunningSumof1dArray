var runningSum = function(nums) {
    let j=0;
    const numbers = nums.length;
    for(i=0; i<numbers; i++){
       j=nums[i]+j
       console.log(j)
    }

};
runningSum([1,2,3,4]);

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

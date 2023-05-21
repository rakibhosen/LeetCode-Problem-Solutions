
const nums = [2, 33,7], target = 9



function twoSum(nums, target) {
    let numObj = {};
      for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (numObj[complement] !== undefined) {
          return [numObj[complement], i];
        }
        numObj[nums[i]] = i;  
      }
    }
    console.log(twoSum(nums,target))
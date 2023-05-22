/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

let  nums = [1,3,5,6], target = 5
var searchInsert = function(nums, target) {
    let val=0;
    let flag=0;
    for(let i=0;i<nums.length;i++) {
        if(nums[i]==target){
           
            if(flag==0){
                flag=1
                val= i;
            }
        }
    }

    if(flag==0){

        let arr = nums
        arr.push(target)

        arr.sort((a,b)=>a-b)


        for(let i=0;i<nums.length;i++) {
            if(nums[i]==target){
                if(flag==0){
                    flag=1
                    val= i;
                
                }
            }
        
        }
    }
    return val;
}

let  arr = [0,0,1,1,1,2,2,3,3,4]

let key=2

var removeElement = function(nums, val) {
  var len = nums.length;
  var count = 0;
  for (var i = 0; i < len; i++) {
    if (nums[i] !== val){
     // nums[count++] = nums[i];
      console.log('count',count++,nums[count++])
    } 
  }
 return count;
};

console.log(removeElement(arr,key))


while(7)




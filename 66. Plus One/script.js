/**
 * @param {number[]} digits
 * @return {number[]}
//  */
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]

// Input: digits = [9]
// Output: [1,0]

var digits = [9,9]
var plusOne = function(digits) {
    var count=0;
    var total=0
    for(let i=0;i<digits.length;i++) {
      total=digits[i]
      count++
    }
    digits[count-1]=total+1
    console.log(digits)
};

plusOne(digits);
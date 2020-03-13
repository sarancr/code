/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
     const arr = [];
     for(var i =0 ; i< nums.length; i++){
         var count = 0;
         for(var j=0; j<nums.length; j++){
             if(nums[i] > nums[j]){
               count=  count +1;
             }
         
             
         }
         
         arr.push(count);
     }
    return arr;
    
};



//[8 , 2, 5, 1]

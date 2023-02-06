var searchInsert = function(nums, target) {
    let pivot, left = 0, right = nums.length -1
    while (left<= right){
        pivot = left + Math.floor((right-left)/2)
        if(nums[pivot] == target) return pivot
        if (target< nums[pivot]) right = pivot - 1
        else left = pivot +1
   }
   return left
};

//we need to find the target, and if not there find index where it should be placed.
// power

// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.

//recursion 

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
}


function findTarget(nums, target) {
  let middleIndex = Math.floor(nums.length / 2) 
  if (nums.length === 1 && nums[0] != target){
    return false
  }
  else if (target === nums[middleIndex]) {
    return true
  } else if (target< nums[middleIndex]){
    return findTarget(target, nums.slice(0,mid))
  }else if (target > nums[middleIndex]) {
    return findTarget(target, nums.slice(middleIndex))
  }
  
}
  
console.log(findTarget([-2,0,4,7,12,15] , 7))
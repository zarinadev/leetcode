//let

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

//we can use 2 for loops here, or assigning object , but it is easier to use Set, because
// TC : O(n)

function containsDublicate(nums) {
  let set = new Set(nuts);
  return set.size != nuts.length;
}

//leetcode

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

var reverseString = function(s) {
    if (s.length === 1) return
    let i = s.length - 2
    while (i >= 0) {
      s.push(s.splice(i, 1)[0])
      i--
    }
  };
  
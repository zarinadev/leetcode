
// let 
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
   let start = 0;
   let seen = {};
 
   for (let end = 0; end < s.length; end++) {
     const char = s[end];
     if (seen[char]) {
       // If the character is already seen, move the start pointer
       // to the next character after the last occurrence of this character
       start = Math.max(start, seen[char]);
     }
     // Update the last seen index of this character
     seen[char] = end + 1;
     // Calculate the length of the current substring
     const len = end - start + 1;
     // Update the maximum length seen so far
     maxLen = Math.max(maxLen, len);
   }
 
   return maxLen;
 };
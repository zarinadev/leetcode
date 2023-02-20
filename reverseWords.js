// let and sey
//Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

var reverseWords = function(s) {
    return s.split(' ').map(function(word) { 
        return word.split('').reverse().join(''); 
    }).join(' ');
};
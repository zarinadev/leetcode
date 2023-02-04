// isPalindromePermutation

// Given a string, write a function to check if it's a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards.

// A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

// Constraints: string contains only letters from A to z and is not empty.

// Use object properties as a key-value pairs. Ex:

// isPalindromePermutation('Tact Coa') //true, permutations are 'taco cat', 'atco cta, 'tac ocat', etc
// Related Topics: 
// Frequency counter





function isPalindromePermutation(str) {
  const pairs = {};
  const str1 = str.toLowerCase();
  for (let char of str1) {
    if (char === " ") continue;

    if (pairs.hasOwnProperty(char)) {
      delete pairs[char];
    } else {
      pairs[char] = 1;
    }
  }

  if (Object.keys(pairs).length <= 1) {
    return true;
  }
  return false;
}

// TC: O(n) where n is str.length
// SC: O(1) because there are 26 unique char in english alphabet

// "Tact Coa"
// tact coa 
//        ^ 
// {
  

//   "o": 1
 
// }
// ["o", "b"]

//create obj
//convert str to lowercase 
//loop tru the str
//check for spaces, we can skip
//assign char to obj key
//delete 
//else we assign to 1
//if more than 1 it means its not palindrome permutation

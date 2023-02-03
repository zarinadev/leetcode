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

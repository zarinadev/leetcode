// Loop Iteration
// One simple way of finding out if a number n is a power of a number b is to keep dividing n by b as long as the remainder is 0. This is because we can write

//n = b*b*b

// Hence it should be possible to divide n by b x times, every time with a remainder of 0 and the end result to be 1.

function isPowerOfThree(n) {
  if (n < 1) {
    return false;
  }
  while (n % 3 == 0) {
    n /= 3;
  }
  return n == 1;
}

// Algorithm

// Check if the provided input value, NNN, is less than or equal to 1. If true, return NNN.

// Otherwise, the function fib(int N) calls itself, with the result of the 2 previous numbers being added to each other, passed in as the argument. This is derived directly from the recurrence relation: Fn=Fn−1+Fn−2

// Do this until all numbers have been computed, then return the resulting answer.

function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

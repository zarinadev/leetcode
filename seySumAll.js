// sey 

// sumAllNums

// Create a function which returns sum of all numbers from a given array. [1,{}, null,2] => 3

// `sumAllNums([1,{}, null,2]) // 3`
// `sumAllNums(["1",NaN, null,2]) // 2`


function sumAllNums(arr) {
    return arr.reduce((acc, curr) => {
        if(typeof curr === 'number' && !isNaN(curr)) {
           return  acc + curr;
        } else {
            return acc
        }
    }, 0);
  }

//   This function takes the same input as the previous one, an array (arr) and uses the reduce method to calculate the sum.

// The reduce method takes two parameters, a callback function and an initial value of the accumulator (0 in this case).

// The callback function takes two parameters, the accumulator (acc) and the current element of the array (curr). It checks if the current element is a number and not NaN. If so, it adds it to the accumulator and returns the new value of the accumulator. Otherwise, it simply returns the accumulator without adding anything to it.

// Finally, the reduce method returns the final value of the accumulator, which is the sum of all the numbers in the array.

  function sumAllNums(arr) {
       let result = 0;
    for (let i=0; i<arr.length; i++){
      if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
          result += arr[i]
      }
    }
    return result
  }


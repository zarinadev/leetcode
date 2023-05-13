// Given array, remove prefix $

// Clear all '$' signs from numbers in a given array. => [2,3,4,5,15]

// `removePrefix(['$2', '$3', '$4', '$5','$15']) // [2,3,4,5,15]`

// Map tru the array, and slice 1 element

function removePrefix(arr) {
    return arr.map(str => str.slice(1))
   }
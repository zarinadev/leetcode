// Create a function to sort numbers in a given array [20, 18, 10, 5];

// `sortNums([20, 18, 10, 5]) // [5, 10, 18, 20]
// sortNums([5,1,0-4]) // [-4,0,1,5]`


function sortNums(array) {
    return array.sort((a,b)=> a-b)
}
// to sort Numbers , create comparison from a,b  and compare them a - b
// if you write just array.sort() = it will compare only first number, like 1, 100, 2,3
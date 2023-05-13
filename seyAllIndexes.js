//  Sey

// Find all indexes of given item.
// Create a function which returns all indexes of an item from a given array.

// Notes:

// Please use loop
// `allIndexOf(["Apple", "Orange", "Apple", "Mango"], "Apple") // [0,2]
// allIndexOf([1,1,2,3,1,3], 1) // [0,1,4]`




function allIndexOf(arr, item) {
    const indexes =[];
 for(let i=0; i < arr.length; i++){
     if (arr[i] === item){
         indexes.push(i)
         
     }
 } 
 return indexes

}
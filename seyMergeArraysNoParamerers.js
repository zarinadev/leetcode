// Create a function to merge all given arrays into a array.
// *Note: we don't know how many parameters are there.
// merge(["Banana", "Orange", "Mango"], ["Orange", "Melon"]) 
// ["Banana", "Orange", "Mango","Orange", "Melon"]


function merge() {
 let newArray = [];
  for(let i = 0; i < arguments.length; i++) {
    newArray = newArray.concat(arguments[i])
  }
  return newArray
}


// To run this function, use arguments.length in the loop, then just assign to empty newarray = newarray.concat(arguments[I], and return the newArray
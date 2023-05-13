// Create a function to sort a given string "gtdebca";

// NOTE: use **sort;**

// `sortStr("gtdebca") // "abcdegt"
// sortStr("seattle") // "aeelstt"`


function sortString(str) {
    return str.split("").sort().join('')
}

// first we need to split the string, then,sort letters, then jon it back

//to sort object

// const items = [
//     { name: "Edward", value: 21 },
//     { name: "Sharpe", value: 37 },
//     { name: "And", value: 45 },
//     { name: "The", value: -12 },
//     { name: "Magnetic", value: 13 },
//     { name: "Zeros", value: 37 },
//   ];
  
//   // sort by value
//   items.sort((a, b) => a.value - b.value);
  
//   // sort by name
//   items.sort((a, b) => {
//     const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
  
//     // names must be equal
//     return 0;
//   });
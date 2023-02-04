//sey

// checkDuplicates

// Implement a function which accepts arguments, and checks whether there are any duplicates among the arguments passed in.

// Constraints: Use multiple pointers. Runtime: O(n log n) Space: O(n)

// Ex:

// checkDuplicates(1, 2, 3) // false
// checkDuplicates(1, 2, 2) // true
// checkDuplicates('a', 'b', 'c', 'a') // true

function checkDuplicates(){
    // arguments ===> [ of args ]
    // arguments
    let obj = {};
  
    for(let arg of arguments){
      if( obj.hasOwnProperty(arg) ){    // obj['abc'] ===> undefined ===> false // obj['abc] = 1 => true
        return true;
      } else {
        // false, dont have this arg in obj
        obj[arg] = 1;
      }  
    }
    return false
  }
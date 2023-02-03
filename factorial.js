// factorial

// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.

function factorial(n) {
    if(n === 0) return 1
    if(n===1 ) return 1
    return n * factorial (n-1)
}

// function factorial (n) {
//     // if n < 0  ->>>
//       if(n < 0) return "Wrong input"
//       // exit condition
//       if (n <= 1) return 1
    
//       // 5 * 4! 
//       return n * factorial (n - 1)                                  n
//     }
    
//     let result = factorial(5)
//     console.log(result)
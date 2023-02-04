function avgPair(arr, target) {
    let start = 0
    let end = arr.length-1
    while(start < end) {
        let avr = (arr[start] + arr[end])/2
        if(avr === target) return true
        if(avr < target) {
            start++
        } else {
            end--
        }
    }
    return false
}

// Time complexity: O(n) where n is array.length
// Space complexity: O(1)

// [1,2,3,4,5,6,7,8]  target = 3.7
// 1              8     (8+1)/2  4.5 === target    
// 1            7        (7+1)/2 = 4    
// 1          6          7/2 = 3.5   
//   2        6          8/2 = 4
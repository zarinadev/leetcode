// BINARY SEARCH 

// Only works on SORTED ARRAY.
// If you don’t have sorted array, use linear search, sort the array and then use Binary search

// Problem: Given a sorted array of ’n’ elements and a target element ’t’ find the index of ’t’ in the array. Return -1 if the target element is not found.

// Pseudocode 

// If the array is is empty, return -1 as the element can not be found.
// If the array has elements, find the middle element in the array.If target is equal to the middle, return the middle element index.

// If target is less than the middle element, binary search left half of the array
// If target is greater than middle element, binary search right of the array.

// ( since the array is sorted, it easy to find where the target is. If target is less than the middle element, binary search left half of the array
// If target is greater than middle element, binary search right of the array.)

// -5. 2. 4. 6.  10    target is 6
// So middle is 4.
// So target is greater than middle ,which is 4 here, the target will be on the right side.

// So just need to find the middle of the sorted array, and remove the half. Put two pointers




// function search(nums, target) {
// Let leftIndex= 0.  //point at the first element
// Let rightIndex = nuts.length -1 // point at the last element
// While(leftIndex <=rightElement) {
// Let middleIndex = Math.floor(leftIndex + rightIndex) / 2.  //Math.floor to return lower integer value. Now the pointers moved to the middle
// if(target === nums[middleIndex]) {
// Return middleIndex

// }

// if(target < nums[middleIndex]) {
// rightIndex = middleIndex -1 //       we change middle index to -1 to go to left and find target
// } else {
// leftIndex = middleIndex + 1

// }
// }
// Return -1 //while loop will be Brock so return -1
// }


// TC : O(lögn)
// SC : 


// if array unsorted than apply linear search, if sorted apply binary search 


var search = function(nums, target) {
    let leftIndex = 0;
    let rightIndex = nums.length -1 
    while( leftIndex < rightIndex){
        let middleIndex = Math.floor(leftIndex + rightIndex) / 2
    }
    if(target === nums[middleIndex]){
        return middleIndex
    }
    if(target < nums[middleIndex] ){
        rightIndex = middleIndex -1
    }else {
        leftIndex = middleIndex +1
    }
    return -1
};



// function findTarget(nums, target) {
//     let leftIndex = 0;
//     let rightIndex = nums.length -1 
//     while( leftIndex < rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//     }
//     if(target === nums[middleIndex]){
//         return middleIndex
//     }
//     if(target < nums[middleIndex] ){
//         rightIndex = middleIndex -1
//     }else {
//         leftIndex = middleIndex +1
//     }
//     return -1
// };

// console.log(findTarget([-2,0,4,7,12,15] , 7))

//TC: O(logn)
//SC: 


function findTarget(nums, target) {
            let leftIndex = 0;
        let rightIndex = nums.length -1 
        while( leftIndex < rightIndex){
            let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        }
        if(target === nums[middleIndex]){
            return middleIndex
        }
        if(target < nums[middleIndex] ){
            rightIndex = middleIndex -1
        }else {
            leftIndex = middleIndex +1
        }
        return -1
    };
    
    console.log(findTarget([-2,0,4,7,12,15] , 7))
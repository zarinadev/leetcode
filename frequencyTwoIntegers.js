function checkFrequency(firstNumber, secondNumber) {
    if(firstNumber.length !== secondNumber.length){
        return false
    }
    const acumulatorFn = {}
    const acumulatorSn ={}
    for(let index = 0; index < firstNumber.length; index++){
        if (acumulatorFn[firstNumber[index]]){
            acumulatorFn[firstNumber[index]] +=1
        } else {
            acumulatorFn[firstNumber[index]] = 1
        }
    }

    for(let index = 0; index < secondNumber.length; index++){
        if (acumulatorSn[secondNumber[index]]){
            acumulatorSn[secondNumber[index]] +=1
        } else {
            acumulatorSn[secondNumber[index]] = 1
        }
    }
    for(let key in acumulatorFn){
        if(acumulatorFn[key] !== acumulatorSn[key]){
        return false
        }
    }
    return true
}


// function checkFrequency(firstNumber, secondNumber) {
//     // convert to strins
//     let first = firstNumber.toString();   // 1st way
//     let second = secondNumber + "";
//   // 5 + '' ===> '5'
//     //123 - 12 => return false
//     if(first.length !== second.length) return false;
  
//     let firstObject = {};
//     let secondObject = {};
  
//     for(let i = 0; i < first.length; i++){    
//       let firstChar = first[i];
//       if(firstObject.hasOwnProperty(firstChar)){
//         firstObject[firstChar] = firstObject[firstChar] + 1;
//       } else{
//       firstObject[firstChar] = 1;     // example: firstObject['2'] = 1;
//       }
      
//       let secondChar = second[i];
//       if(secondObject.hasOwnProperty(secondChar)){
//         secondObject[secondChar] = secondObject[secondChar] + 1;
//       } else{
//       secondObject[secondChar] = 1;     // example: firstObject['2'] = 1;
//       }
//     }
  
//     for(let key in firstObject){
//       // key = 1, key = 8, ... 2
//       if(firstObject[key] !== secondObject[key]) return false
//     }
//     // let arrayOfKeys = Object.keys(firstObject)    // ['2', '8', '1' ]
  
//     // for(let key of arrayOfKeys){
//     //   // key = 2    // key = '8'    // key = '1'
//     //   if(firstObject[key] !== secondObject[key]) return false   // 
//     // }
//   return true
//   }
  
  // n * 2 + n + 10 ---> O(n) ---> time
  
  // 20 ---> O(1) ---> space
  
  
  
  
  // to str -> 
  // "1 8 2"          "2 8 8"
  // count frq of each char of str
  // obj1
  // {
  //   1: 1,
  //   8: 1,
  //   2: 1
  // }
  
  // obj2
  // {
  //   2: 1,
  //   8: 2,
    
  // }
  
  // obj1[1] === onj2[1]
  //  1      !==      undefined
  
  //  obj1[8]   === obj2[8] 
  //   1               2
  
  
  
  
  // compare objects -> each key by valye
  // if keys and vals match -> true  otherwise fatsr



  //refactored code

//   function stringToObject(str){
//     const obj = {};
//     for(let char of str){    
//       obj[char] = (obj[char] || 0) + 1;
  
//     }
//     return obj;
//   }
  
//   function checkFrequency(firstNumber, secondNumber) {
//     let first = firstNumber.toString();   // 1st way
//     let second = secondNumber + "";
//     if(first.length !== second.length) return false;
//     let firstObject = stringToObject(first);
//     let secondObject = stringToObject(second);
//     console.log(firstObject, secondObject)
//     for(let key in firstObject){
//       if(firstObject[key] !== secondObject[key]) return false   
//       console.log(firstObject[key], secondObject[key])
//     }
//     return true
//   }
function removeDup(array) {
    const result = []
    for(let i=0; i< array.length; i++){
        if(result.indexOf(array[i])=== -1) {
  result.push(array[i])
        } 
    }return result
    }
  
  
 // another solution 

 function removeDup(array) {

   let newSet = new Set();
   let output = []
  
   for(let i=0;i<array.length;i++){
     if (!newSet.has(array[i])){
       newSet.add(array[i])
       output.push(array[i])
     }
   }
   
   return output
  }
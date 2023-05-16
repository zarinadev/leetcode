

// Implement custom indexOf method

// `const str = "California";
// str.indexOfCus("i") // 3;`

function indexOf(str,char){
    for(let i=0; i<str.length; i++){
      if(str[i]== char)
      return i
    }
    return -1
  }

  
    
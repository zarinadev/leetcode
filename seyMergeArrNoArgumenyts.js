// merge

// Create a function to merge all given arrays into a array.

// *Note: we don't know how many parameters

// `merge([1],[2],[3,4],[5]) // [1,2,3,4,5]`

function merge() {
    let result = []
    for( let i=0; i< arguments.length; i++){
        result = result.concat(arguments[i])
    }
    return result
}

//or sey 

function merge(){

    result=[]
    return result.concat(...arguments)
  }
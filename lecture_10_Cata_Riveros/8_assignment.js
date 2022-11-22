// Intermediate Recursion

const wordArray = [ "The", "quick", "silver", "wolf" ];



function sentencify(array, index){
    
    if(index > array.length-1){
        return ("!")
    }
    return ( " " + array[index] + sentencify(array, index +1) )
    
}

console.log(sentencify(wordArray,0))
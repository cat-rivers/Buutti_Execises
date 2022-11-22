// Merge sort Recursion

const unSorted = [4, 19, 7, 1, 9, 22, 6, 13]

function mergeSort (array){
    if(array.length === 1){
        return array
    }else{
        const midPoint = array.length / 2 
        const right = array.slice(midPoint, array.length)
        const left = array.slice(0 , midPoint)
        return ( right , left)
    }
} 

console.log(mergeSort(unSorted))
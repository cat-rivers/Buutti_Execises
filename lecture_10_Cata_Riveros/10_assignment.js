// Merge sort Recursion

const unSorted = [4, 19, 7, 1, 9, 22, 6, 13]

function mergeSort (array){
     
    if(array.length === 1){
        return array
    }else{
        const middle = Math.floor(array.length / 2)
        const right = array.slice(middle , array.length)
        const left =array.slice(0, middle)
        
        return  mergeSubLists(mergeSort(left) , mergeSort((right)) )

    }
} 
function mergeSubLists(left, right){
    const resArr = [];
    let leftIndex =0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            resArr.push(left[leftIndex]);
            leftIndex++;
           
        }else{
            resArr.push(right[rightIndex]);
            rightIndex++;
            
        }
    }
    // This last part I didnt do alone, got help > w <
    if (left[leftIndex]) {	
		const leftoverElements = left.slice(leftIndex)
		resArr.push(...leftoverElements); 
	} else {
		const leftoverElements = right.slice(rightIndex)
		resArr.push(...leftoverElements); 

	}
  return (resArr )

} 

console.log(mergeSort(unSorted))
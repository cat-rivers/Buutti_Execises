
const findMinNumber = (num1,num2,num3) => {
    const arr = [num1,num2,num3];
    const smallest = arr.reduce((a,b) => 
                    a < b 
                    ?a 
                    :b 
    )
    return smallest
}
    

console.log(findMinNumber(10,3,4))
console.log(findMinNumber(50,43,6))
console.log(findMinNumber(300,56,980))


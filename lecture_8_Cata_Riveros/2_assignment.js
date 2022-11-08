
const minimum = (num1,num2,num3) => {
    const arr = [num1,num2,num3];
    const smallest = arr.reduce((a,b) => 
                    a < b 
                    ?a 
                    :b 
    )
    return smallest
}
    

console.log(minimum(1,3,4))
console.log(minimum(5,43,6))
console.log(minimum(32,56,980))


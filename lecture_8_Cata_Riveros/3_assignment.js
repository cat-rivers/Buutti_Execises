// a)

const exponentValueList = (n) =>{
    let count = 1
    if(n <= 0){
        console.log("n needs to be positive")
    }else{
        while(count<= n){
            console.log(2 ** count);
            count++
}}}
console.log("Results part a: ")
exponentValueList(6)

const exponentValueList2 = (n,numberToPower) =>{
    let count = 1
    if(n <= 0){
        console.log("n needs to be positive")
    }else{
        while(count<= n){
            console.log(numberToPower ** count);
            count++
}}}
console.log("Results part b: ")
exponentValueList2(4,2)
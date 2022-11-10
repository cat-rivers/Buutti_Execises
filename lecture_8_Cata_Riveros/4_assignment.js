

const countSheep = (numberOfSheep) => {
    let result = " ";
    for(let i = 1 ; i <= numberOfSheep; i++){
    result += (i + " sheep...")
   }
    return result
}
console.log(countSheep(5))
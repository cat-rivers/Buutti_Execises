// String length comparison

const name1 = "ii";
const name2 = "lisa";
const name3 = "catalina";
let result;


const nameSorting = (n1, n2, n3)=> {
if(n1.length > n2.length && n1.length > n3.length){
        if(n2.length > n3.length){ return [n1 , n2 , n3] 
        }else{
            return [n1, n3, n2] 
        }
}else if(n2.length > n1.length && n2.length > n3.length){
        if(n1.length > n3.length){return [n2, n1, n3] 
        }else{
            return [n2, n3, n1] 
        }
}else{
    if(n2.length > n1.length){
        return [n3, n2, n1] 
    }else{ 
        return [n3, n1, n2] }
}
}

console.log(nameSorting(name1, name2, name3))




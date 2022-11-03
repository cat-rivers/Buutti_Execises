// String length comparison

const n1 = "Ana";
const n2 = "lisa";
const n3 = "lina";
let result;

//This functions compiles and returns the ordered list. 
//Requires only to find the longest length
const textCompiler = (t1,t2,t3) => {
  return [t1, (t2.length > t3.length
               ?[t2 , t3] 
               :[t3,t2])  
         ].flat().join(", ")
}

//Checking the longest length and then using
//The function to avoid redundancies

if(n1.length > n2.length && n1.length > n3.length){
    result = textCompiler(n1,n2,n3)
}else if(n2.length > n1.length && n2.length > n3.length){
    result = textCompiler(n2,n1,n3)
}else {
    result = textCompiler(n3,n1,n2)
}
console.log(result)
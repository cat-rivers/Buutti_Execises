// easy recursion

function F (n){ 
    if( n < 2){
    return n}
    return (F(n - 2)*3)  + F(n - 1)
    }
    

console.log(F(17))




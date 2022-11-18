// easy recursion

function F (n){ 
    if( n < 2){
    return n}
    return (F(n - 2)*3)  + F(n - 1)
    }
    

console.log(F(0) , F(1), F(2), F(3), F(4), F(5))
console.log(F(6) , F(7), F(8), F(17))




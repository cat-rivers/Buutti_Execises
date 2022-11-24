const getCountOfLetters = (text) => {
    const obj = {}
    for (l of text) {if(l !== " "){obj[l] = 0} }
    for (l of text){
        if(Object.keys(obj).includes(l)){
            obj[l] = obj[l] + 1
    } 
        } 
    return obj
}

console.log(getCountOfLetters("a black cat"))
console.log(getCountOfLetters("aaaaaaaa aaaaa"))
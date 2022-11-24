// Dictionary

const dictionary = {
    hello: "hei",
    world: "maailma",
    bit: "bitti",
    byte: "tavu",
    integer: "kokonaisluku",
    boolean: "totuusarvo",
    string: "merkkijono",
    network: "verkko",

}

// b) --------------------------
const obj = { a: 2, b: 5, text: "hello, I am an example" }

const translatableWords = () => {
    return Object.keys(dictionary)
}
console.log(translatableWords())


// c) -------------------------- d)

const translate = (word) => {
    if (Object.keys(dictionary).includes(word)){
        return dictionary[word]  
    }else{
        console.log("no translation exists for word" )
        return null}
     
}

console.log(translate("network"))
console.log(translate("world"))
console.log(translate("boop"))





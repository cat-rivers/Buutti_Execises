// a)
const lang = "fi"

const hello = (language)=>{
    if(language === "es"){
        console.log("Hola mundo!")
    }
    if(language === "eng"){
        console.log("Hello world!")
    }
    if(language === "fi"){
        console.log("Hei Maailman!")
    }
}

hello(lang)

// b)
const hello2 = (language2)=>{
    if(language2 === "es"){
        console.log("Hola mundo!")
    }
    if(language2 === "eng"){
        console.log("Hello world!")
    }
    if(language2 === "fi"){
        console.log("Hei Maailman!")
    }
}

hello("eng")

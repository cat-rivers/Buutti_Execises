// a) __________________________

const lang = "fi";

const hello = (language) => {
  if (language === "es") 
  {
    console.log("Hola mundo!");
  }
  if (language === "eng") 
  {
    console.log("Hello world!");
  }
  if (language === "fi") 
  {
    console.log("Hei Maailman!");
  }
};

hello(lang);

// b)______________________________________

const hello2 = (language2) => {
  if (language2 === "es") {
    console.log("Hola mundo!");
  }
  if (language2 === "eng") {
    console.log("Hello world!");
  }
  if (language2 === "fi") {
    console.log("Hei Maailman!");
  }
};

hello("eng");

// Extra - function using switch instead of if-else__________________
function languageHello(language3) {
  switch (language3) {
    case "es":
      console.log("Hola mundo");
      break;
    case "eng":
      console.log("Hello world");
      break;
    case "fi":
      console.log("Hei maailman!");
      break;
    default:
      console.log("language not available");
  }
}

languageHello("fi");

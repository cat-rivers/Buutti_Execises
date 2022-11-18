const students = [
  {name: "Sami", score: 24.75},
  {name: "Heidi", score: 20.25},
  {name: "Jyrki", score: 27.5},
  {name: "Helinä", score: 26.0},
  {name: "Maria", score: 17.0},
  {name: "Yrjö", score: 14.5},
];



const getGrades = (obj) => {
    const array = [];
    const newObj = [];
    for(const i in obj){
        if(obj[i].score < 14.0 ){array[i] = 0}
        if(obj[i].score >= 14.0 &&  obj[i].score <= 17.0){ array[i] = 1 }
        if(obj[i].score > 17.0 &&  obj[i].score < 20.0){ array[i] = 2 }
        if(obj[i].score > 20.0 &&  obj[i].score < 23.0){ array[i] = 3 }
        if(obj[i].score > 23.0 &&  obj[i].score < 26.0){ array[i] = 4 }
        if(obj[i].score >= 26.0 ){ array[i] = 5 }
        newObj[i] = {name: obj[i].name, grade: array[i]}  
       
    }
    return newObj
    
}

console.log(getGrades(students))





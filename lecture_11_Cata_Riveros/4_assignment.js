const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE"
let x = 0;
let y = 0;
const commandHandlers = {
    N: () => y++,
    S: () => y--,
    W: () => x--,
    E: () => x++,
    C: () => {},   
}

for(const char of commandList){
    if( char !== "B"){
        commandHandlers[char]()  
    }else{
        break;
    }
}

console.log(`x: ${x} , y: ${y}`)



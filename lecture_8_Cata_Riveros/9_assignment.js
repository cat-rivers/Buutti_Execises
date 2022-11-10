let x = 0;
let y = 0;

const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";

const commandCount = ( command) => {
  
  for (let i = 0; i < command.length; i++) {
    const letter = command.charAt(i).toLowerCase() ;
        if (letter === "n") { y = y + 1; }
        if (letter === "e") { x = x + 1;  }
        if (letter === "s") { y = y - 1;  }
        if (letter === "w") { x = x - 1;  }
        if (letter === "c") { continue; }
        if (letter === "b") { break;  }
    }

  console.log( "y is: ", y , "\nx is: " , x);
}
  
commandCount(commandList)



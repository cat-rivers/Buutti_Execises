class Robot{
    constructor(x , y){
        this.x = x,
        this.y = y
    }
    handleCommandList(commandList){
        const commandHandlers = {
            N: () => this.y++,
            S: () => this.y--,
            W: () => this.x--,
            E: () => this.x++,
            C: () => {},   
        }
        for(const char of commandList){
            if( char !== "B"){
                commandHandlers[char]()  
            }else{
                break;
            }
        }
    }
}

const robot = new Robot(0 , 0)
console.log(robot)
robot.handleCommandList("NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE")
console.log(robot)
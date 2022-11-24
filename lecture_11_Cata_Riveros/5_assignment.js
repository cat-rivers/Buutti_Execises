class Room{
    constructor(height, width){
        this.height = height,
        this.width = width
        this.furniture = []
    }
    getArea(){
        return this.height * this.width
    }
    addFurniture(string){
        this.furniture.push(string)
    }
}

// a) --------------
const room = new Room(4.5, 6.0);
console.log(room);


// b) --------------


const area = room.getArea();
console.log(area);

// c) --------------

room.addFurniture("sofa");
room.addFurniture("bed");
room.addFurniture("chair");
console.log(room)


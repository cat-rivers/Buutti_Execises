// Library node App
import fs from "fs"

const getDB = () => {
    const data = fs.readFileSync("./db.json")
    return JSON.parse(data.toString())
}

const updateDB = (updatedDB) => fs.writeFileSync("./db.json" , JSON.stringify(updatedDB))


// const updateUser = () => {
//     const db = getDB();
    
//     do something with the db
    
//     const updatedDB = functionThatChangesDB(...)
    
//     updateDB(updatedDB);
// }



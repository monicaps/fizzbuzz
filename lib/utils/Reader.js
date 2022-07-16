const fs = require("fs");

class Reader{
    constructor(){}
    static readJsonFile(path){
        const data = fs.readFileSync(path);
        const explorers = JSON.parse(data);
        console.log(explorers);
        return explorers;
    }
}

module.exports = Reader;
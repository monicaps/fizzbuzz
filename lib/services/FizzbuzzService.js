const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");

class FizzbuzzService{
    constructor(){}
    static applyValidationInExplorer(explorer){
        //
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = ExplorerService.filterByMission(explorers,"node");

        const assignFizzBuzzTrick = function(explorer){
            if(explorer.score%3 === 0){
                explorer.trick = "FIZZ";
        		//return explorer
    		}
    		if(explorer.score%5 === 0){
        		explorer.trick = "BUZZ";
        		//return explorer
    		}
    		if(explorer.score%5 === 0 && explorer.score%3 === 0){
        		explorer.trick = "FIZZBUZZ";
        		//return explorer
    		}else{
        		explorer.trick = explorer.score;
        		//return explorer
    		}

    		return explorer;
        };

        const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) => assignFizzBuzzTrick(explorer));
        console.log(explorersInNodeAndFizzBuzzTrick);
        return explorersInNodeAndFizzBuzzTrick;
    }
    static applyValidationInNumber(number){
        var trick;
        if(number%3 === 0){
            trick = "FIZZ";
        }
        if(number%5 === 0){
            trick = "BUZZ";
        }
        if(number%5 === 0 && number%3 === 0){
            trick = "FIZZBUZZ";
        }else{
            trick = number;
        }
        return trick;
    }
}

module.exports = FizzbuzzService;
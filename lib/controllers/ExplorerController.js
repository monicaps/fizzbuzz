const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");

class ExplorerController{
	constructor(){}
	static getExplorersByMission(mission){
		const explorers = Reader.readJsonFile("explorers.json");
		const filter = ExplorerService.filterByMission(explorers,mission);
		console.log(filter);
		return filter;
	}
	static getExplorersUsernamesByMission(mission){
		const explorersInMission = ExplorerController.getExplorersByMission(mission);
		const usernames = ExplorerService.getExplorersUsernamesByMission(explorersInMission,mission);
		console.log(usernames);
		return usernames;
	}
	static getExplorersAmountByMission(mission){
		const explorersInMission = ExplorerController.getExplorersByMission(mission);
		const amount = ExplorerService.getAmountOfExplorersByMission(explorersInMission,mission);
		console.log(amount);
		return amount;
	}
}

module.exports = ExplorerController;
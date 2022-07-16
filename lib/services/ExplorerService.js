
class ExplorerService{
	constructor(){}
	static filterByMission(explorers,mission){
		const explorersInMission = explorers.filter((explorer) => explorer.mission == mission)
		console.log(explorersInMission)
		return explorersInMission
	}
	static getAmountOfExplorersByMission(explorers,mission){
		const explorersInMission = explorers.filter((explorer) => explorer.mission == mission)
		const numberOfExplorers = explorersInMission.length
		console.log(numberOfExplorers)
		return numberOfExplorers
	}
	static getExplorersUsernamesByMission(explorers,mission){
		const explorersInMission = explorers.filter((explorer) => explorer.mission == mission)
		const namesOfExplorers = explorersInMission.map((explorer) => explorer.githubUsername)
		return namesOfExplorers
	}
}

module.exports = ExplorerService
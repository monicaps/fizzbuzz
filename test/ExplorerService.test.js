// Clase anterior con la que obtenemos los explorers
const ExplorerService = require("./../lib/services/ExplorerService")
const Reader = require("./../lib/utils/Reader")
const explorers = Reader.readJsonFile("explorers.json")

describe("Pruebas Unitarias para la clase ExplorerService", () =>{
	test('Filtrar explorers por mision', () => {
		// Aplicación del ExplorerService sobre la lista de explorers
		const explorersMission=ExplorerService.filterByMission(explorers, "node")
		expect(explorersMission).not.toBeNull()
  		expect(explorersMission).toBeDefined()
	});
	test('Numero de explorers por mision', () => {
		const numberExplorers=ExplorerService.getAmountOfExplorersByMission(explorers, "node")
		expect(numberExplorers).toBeGreaterThan(0);
	});
	test('Nombre de los explorers de la mision', () => {

		const namesExplorers=ExplorerService.getExplorersUsernamesByMission(explorers, "node")
		expect(namesExplorers).not.toBeNull()
	});
})
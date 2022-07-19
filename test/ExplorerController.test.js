const ExplorerController = require("./../lib/controllers/ExplorerController");

describe("Pruebas Unitarias para la clase ExplorerController", () =>{
    test("Validando controlador para filtro de misión", () => {
        const resp1=ExplorerController.getExplorersByMission("node");
        expect(resp1).toBeDefined();
    });
    test("Validando controlador para usernames de explorers", () => {
        const resp2=ExplorerController.getExplorersUsernamesByMission("node");
        expect(resp2).toBeDefined();
    });
    test("Validando controlador para numero de explorers", () => {
        const resp3=ExplorerController.getExplorersAmountByMission("node");
        expect(resp3).toBeDefined();
    });
    test("Validando controlador para asignacion de trick", () => {
        const resp4=ExplorerController.applyValidationInNumber(15);
        expect(resp4).toBeDefined();
    });
});

const FizzbuzzService = require("./../lib/services/FizzbuzzService");

describe("Pruebas Unitarias para la clase FizzbuzzService", () =>{
    test("Validando explorer 1", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const resp1=FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1}
        expect(resp1).toBeDefined();
    });
    test("Validando explorer 3", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        const resp2=FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}
        expect(resp2).toBeDefined();
    });
    test("Validando explorer 5 y 15", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        const resp3=FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}
        expect(resp3).toBeDefined();

        const explorer15 = {name: "Explorer15", score: 15};
        const resp4= FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        expect(resp4).toBeDefined();
    });
});





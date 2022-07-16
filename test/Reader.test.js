//correr prueba con 'npm test  <donde esta la prueba>'
const Reader = require("./../lib/utils/Reader");

describe("Pruebas Unitarias para la clase Reader", () =>{
    test("Leer un archivo JSON", () => {
        const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
        expect(explorers).not.toBeNull();
  		expect(explorers).toBeDefined();
    });
});
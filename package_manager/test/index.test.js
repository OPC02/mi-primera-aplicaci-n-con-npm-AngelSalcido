const assert = require('assert');
const sumar= require('../src/index');

// Grupos o set de pruebas

describe("Comprobar suma de dos numeros", ()=>{
    //positivo 5+5 = 10
    it("Cinco mas cinco es igual a diez", ()=>{
        assert.equal(10, sumar(5,5));
    });
    //negativo 5+5 !=55
    it("Cinco mas cinco no es igual a cincuenta y cinco", ()=>{
        assert.notEqual(55, sumar(5,5));
    })
});


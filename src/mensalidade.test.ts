import { describe, it, expect } from "vitest";
import { calcularMensalidade } from "./mensalidade";

describe("Cálculo de mensalidade", () => {
    it("deve aplicar 10% de desconto", () => {
        //Arrange
        const valor = 100;
        const desconto = 10;

        //Act
        const resultado = calcularMensalidade(valor, desconto);

        //Expect
        expect(resultado).toBe(90);
    })
})
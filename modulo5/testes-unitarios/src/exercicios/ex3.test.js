import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    it("retorna true para '[1,2,3,4,5,5,6,7,8]'", () => {
        const res=checaItensDuplicados([1,2,3,4,5,5,6,7,8])
        expect(res).toEqual(true)
    });
});
describe("Checa itens duplicados", () => {
    it("retorna false para '[1,2,3,4,5,6,7,8]'", () => {
        const res=checaItensDuplicados([1,2,3,4,5,6,7,8])
        expect(res).toEqual(false)
    });
});
describe("Checa itens duplicados", () => {
    it("retorna false para '[1,2,2,3,4,5,]'", () => {
        const res=checaItensDuplicados([1,2,2,3,4,5])
        expect(res).toEqual(true)
    });
});
describe("Checa itens duplicados", () => {
    it("retorna false para '[1,1,2,2,3,3,4,4,5,5]'", () => {
        const res=checaItensDuplicados([1,1,2,2,3,3,4,4,5,5])
        expect(res).toEqual(true)
    });
});
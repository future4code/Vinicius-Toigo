import { validateEmptyProperties, ValidateEmptyPropertiesOutput } from "../src/validateEmptyProperties";

//criar conjunto de testes. pra isso, a gente usa o describe
describe("Testando a validateEmptyProperties", ()=>{

  //funciona igual ao test()
  // it("fasefase", ()=>{

    // });


    test("Deve retornar erro caso o objeto tenha uma string vazia", ()=>{

        const input: object = {
            nome: ""
        };

        const output: ValidateEmptyPropertiesOutput = validateEmptyProperties(input);
        /*
        output = {isValid: false, errors: [{key: "nome", value: ""}]};
        */
        //objeto é válido se não há valores vazios em suas propriedades. isValid = true
        //se o objeto possui string vazia, 0, undefined ou null. Ele é inválido. isValid = false

       expect(output).toEqual({isValid: false, errors: [{key: "nome", value: ""}]});
       expect(output.isValid).toBe(false);
       expect(output.errors.length).toBe(1);
        
    });

    test("Deve retornrar erro caso o objeto tenha um 0 como valor", ()=>{

        const input: object = {
            idade: 0
        };

        const output: ValidateEmptyPropertiesOutput = validateEmptyProperties(input);

        expect(output.isValid).toBe(false);
        expect(output.errors.length).toBe(1);
        expect(output.errors).toContainEqual({key: "idade", value: 0});
        //o toContain é o toEqual dos arrays, entao ele checa arrays
        //para checar se há uma prop especifica, use o toContainEqual

    });


    test("Deve retornar erro caso o valor seja undefined", ()=>{

        const input: object = {
            username: undefined
        };

        const output: ValidateEmptyPropertiesOutput = validateEmptyProperties(input);

        expect(output.isValid).toBe(false);
        expect(output.errors.length).toBe(1);
        expect(output.errors[0]).toEqual({key: "username", value: undefined});

    });

    test("Deve retornar erro caso o valor seja null", ()=>{

        const input: object = {
            dataNascimento: null
        };

        const output: ValidateEmptyPropertiesOutput = validateEmptyProperties(input);

        expect(output.isValid).toBe(false);
        expect(output.errors.length).toBe(1);
        expect(output.errors[0]).toEqual({key: "dataNascimento", value: null});

    });

    test("Deve retornar sucesso com isValid true caso o valor seja válido", ()=>{
        
        const input: object = {
            nome: "João"
        };

        const output: ValidateEmptyPropertiesOutput = validateEmptyProperties(input);

        expect(output.isValid).toBe(true);
        expect(output.errors.length).toBeLessThan(1);
        expect(output.errors.length).toBe(0);

    });

    test("Deve retornar erro e preencher os dois valores inválidos", ()=>{
        const input: object = {
            nome: "",
            idade: 0
        };

        const output: ValidateEmptyPropertiesOutput = validateEmptyProperties(input);
        console.log(output);
        expect(output.isValid).toBe(false);
        expect(output.errors.length).toBeGreaterThan(1);
        expect(output.errors[0]).toEqual({key: "nome", value: ""});
    });

    test("Deve retornar erro caso exista uma propriedade válida e outra inválida", ()=>{

        const input: object = {
            nome: "Rodrigo",
            idade: 0,
            username: undefined,
            dataNasc: "22/12/1985"
        };

        const output: ValidateEmptyPropertiesOutput = validateEmptyProperties(input);
        console.log(output);
        //{isValid: false, errors: []}
        expect(output.isValid).toBe(false);
        expect(output.errors.length).toBe(2);
        expect(output.errors).toContainEqual({key: "idade", value: 0})
        expect(output.errors).toContainEqual({key: "username", value: undefined});
    })
  

});

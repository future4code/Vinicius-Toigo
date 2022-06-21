- Exercício 1
    
    A primeira implementação que vamos fazer refere-se à função que vai cuidar do hash da nossa senha. Vamos utilizar um bem famoso e muito recomendado para senhas de usuários: *bcryptjs*. A principal vantagem dele é que é gerada uma string aleatória e atrelada à entrada da criptografia. Isso **impede** que se faça o ataque chamado de ***rainbow table*,** que consiste em montar uma tabela com infinitas possibilidades da saída do *hash*. 
    
    Abaixo, há o exemplo de uso da função de *hash*
    
    ```tsx
    import * as bcrypt from "bcryptjs";
    
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    console.log("encrypted message: ", result);
    ```
    
    a) *O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*
    
    O salt acrescenta sequências de caracteres para a senha, também possui o hash para evitar ataques rainbow table. 
    Round é o nome dado pela lib ao Cost, que seria o tempo de execução do algoritmo, quanto maior ele for, mais complexo o algoritmo será. Recomenda-se o maior possível para manter a segurança, porém deve-se manter também a performance, então entre 10 e 15 é o recomendado.


    b) *Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.  ***** 
    
    ```tsx
    import * as bcrypt from "bcryptjs";


    const hash = async(s: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    return result;
    }
    ```
    
    c) *Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs*

    ```tsx
    const compare = async(s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
    }
    ```
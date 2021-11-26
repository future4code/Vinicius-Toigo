import react from "react";


export default class Etapa1 extends react.Component {
    
    render() {

        return (

    <div className="App">
        <h1>Etapa 1 - Dados Gerais</h1>
        <p>Qual o seu nome?</p>
         <input></input>
        <p>Qual a sua idade?</p>
        <input></input>
        <p>Qual o seu e-mail?</p>
        <input></input>
        <p>Qual o seu grau de escolaridade?</p>
        <select>
	    <option value="Ensino médio incompleto">Ensino médio incompleto</option>
        <option value="Ensino médio completo">Ensino médio completo</option>
        <option value="Ensino superior incompleto">Ensino superior incompleto</option>
        <option value="Ensino superior completo">Ensino superior completo</option>
        </select>
        </div>

 );
}
}




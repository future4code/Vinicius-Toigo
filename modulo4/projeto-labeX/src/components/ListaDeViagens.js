
import React,{useEffect} from 'react';
import styled from 'styled-components'

const DivDosBotoes=styled.div`
display :grid;
margin-top:200px;
align-items: center;
justify-content: center;


`
const BotaoVoltar= styled.button`
background-color:red
color:black
margin-bottom:25px;
border-radius:25px;
cursor: pointer;

`
const BotaoInscrever= styled.button`
background-color:red
color:black
margin-top:25px;
border-radius:25px;
cursor: pointer;
`

  

function ListaDeViagens () {

    useEffect(()=>{
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/vinicius/trips')
    .then(responde.data)
    .catch('Ocorreu um erro')
   
    })

    return (

      <DivDosBotoes >
  
      
      
      <BotaoVoltar>Ver Viagens</BotaoVoltar> <hr></hr>
      <BotaoInscrever>Área de Admin</BotaoInscrever>

        <h1>Lista de Viagens</h1>
      </DivDosBotoes>
        

       
      
    );
  
  
    }

    export default ListaDeViagens
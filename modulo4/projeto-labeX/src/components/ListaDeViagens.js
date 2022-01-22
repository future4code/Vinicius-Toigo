import React, {  useState,useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const DivDosBotoes = styled.div`
display :grid;
margin-top:100px;
align-items: center;
justify-content: center;


`
const BotaoVoltar = styled.button`
background-color:red
color:black
margin-bottom:25px;
border-radius:25px;
cursor: pointer;

`
const BotaoInscrever = styled.button`
background-color:red
color:black
margin-top:25px;
border-radius:25px;
cursor: pointer;
`

function Navegacao(){
  const history = useHistory();
   const voltarhome = ()=>{
   history.push("/home");
 };
}
export const ListaDeViagens = () => {

  
  const [data, setData] = useState([])

  useEffect(() => {
    pegarViagens()
  }, [])

  const pegarViagens = async () => {

    await
      axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/vinicius/trips')
        .then((res) => {
          console.log(res.data.trips)
          setData(res.data.trips)
        }).catch((err) => {
          console.log(err.response)
        })
  }

    
    // const ListaDeViagens = ()=> {
    //   const history=useHistory()

    //   const vaParaPaginaPrincipal = () => {
    //     history.push("/")

    //   }
    // }

    
  return (
      
    <DivDosBotoes >

<BotaoVoltar onClick={() => voltarhome('/')} >Voltar </BotaoVoltar> <br></br>

      <h1>Lista de Viagens</h1>
      {data && data.map((elemento,indice)=>{
        return (

          <div key={indice}>  
             <h1>{elemento.planet}</h1>
             <p>{elemento.name}</p>
             <p>{elemento.description}</p>
             <p>{elemento.date}</p>
          </div>

         
        )
      })}
       
    </DivDosBotoes>


  );


}


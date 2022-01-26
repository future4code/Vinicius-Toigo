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
const BotaoAdminHome = styled.button`
background-color:red
color:black
margin-top:25px;
border-radius:25px;
cursor: pointer;
`

export const ListaDeViagens = () => {

  const history = useHistory()

   const vaParaPaginaPrincipal = ()=>{
   history.push("/home");
   }

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
    
  return (
      
    <DivDosBotoes >

<BotaoVoltar onClick={() => history.push('/home')} >Voltar</BotaoVoltar> <br></br>
<BotaoAdminHome onClick={() => history.push('/FormularioAplicação')} >Inscrever-se</BotaoAdminHome> <br></br>
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



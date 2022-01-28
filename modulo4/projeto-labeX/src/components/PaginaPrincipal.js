
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const DivDosBotoes = styled.div`
display :grid;
margin-top:200px;
align-items: center;
justify-content: center;  


`
const BotaoVerViagens = styled.button`
background-color:red
color:black
margin-bottom:25px;
border-radius:25px;
cursor: pointer;

`
const BotaoAreaAdmin = styled.button`
background-color:red
color:black
margin-top:25px;
border-radius:25px;
cursor: pointer;

`

export const PaginaPrincipal = () => {

 

  const history = useHistory()
  const vaParaPaginaAdmin = ()=>{
    history.push("/adminhome");
    }
    
  return (
    <DivDosBotoes >

      <h1>LabeX</h1>

      <BotaoVerViagens onClick={() => history.push('/viagens')}>Ver Viagens</BotaoVerViagens> <br></br>
      <BotaoAreaAdmin onclick={()=> history.push('/adminhome')}>Área de Administrador</BotaoAreaAdmin>

    </DivDosBotoes>
  )
}


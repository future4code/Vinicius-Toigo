
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { AdminHome } from './AdminHome';

const DivDosBotoes = styled.div`
display :grid;
margin-top:200px;
align-items: center;
justify-content: center;  


`
const BotaoVerViagens = styled.button`
box-shadow:inset 0px 34px 0px -15px #b54b3a;
	background-color:#a73f2d;
	border-radius:36px;
	border:1px solid #241d13;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:15px 40px;
	text-decoration:none;
	text-shadow:0px -1px 0px #7a2a1d;
`
const BotaoAreaAdmin = styled.button`
box-shadow:inset 0px 34px 0px -15px #b54b3a;
	background-color:#a73f2d;
	border-radius:36px;
	border:1px solid #241d13;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:15px 40px;
	text-decoration:none;
	text-shadow:0px -1px 0px #7a2a1d;

`

export const PaginaPrincipal = () => {

 
  const history = useHistory()

  const vaParaPaginaAdmin = ()=>{
    history.push('/adminhome');
    }
    
  return (
    <DivDosBotoes >

      <h1>LabeX</h1>

      <BotaoVerViagens onClick={() => history.push('/viagens')}>Ver Viagens</BotaoVerViagens> <br></br>
      <BotaoAreaAdmin onClick={vaParaPaginaAdmin}>Área do Administrador</BotaoAreaAdmin>

    </DivDosBotoes>
  )
}


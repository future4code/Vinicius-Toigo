import React, {  useState,useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const DivFormulario = styled.div`
display :grid;
margin-top:100px;
align-items: center;
justify-content: center;


`

const BotaoVoltar = styled.button`
-moz-box-shadow:inset 0px 34px 0px -15px #b54b3a;
	-webkit-box-shadow:inset 0px 34px 0px -15px #b54b3a;
	box-shadow:inset 0px 34px 0px -15px #b54b3a;
	background-color:#a73f2d;
	-webkit-border-radius:36px;
	-moz-border-radius:36px;
	border-radius:36px;
	border:1px solid #241d13;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	font-weight:bold;
	padding:15px 40px;
	text-decoration:none;
	text-shadow:0px -1px 0px #7a2a1d;

`
const BotaoAplicarParaViagem = styled.button`
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


        
export const Formulario = () => {
  const history = useHistory()

  return (
      
    <DivFormulario >

    

      <BotaoVoltar onClick={() => history.push('/')} >Voltar</BotaoVoltar> <br></br>

      <h1>Formulário de Aplicação</h1>

      <select
          type="text"

        >
          <option value="">Escolha uma viagem</option>
          
        </select>

          <input
          type="text"
          placeholder="Nome"

          />
          <input
          type="number"
          placeholder="Idade"/>

          <input
          type="text"
          placeholder="Profissão"
          />

          <select
          type="text"
          placeholder="Escolha um país"
          >
          <option value="Brasil">Brasil</option>
          
        </select>

        <textarea 
        type="text"
        placeholder="Texto de candidatura"
      
        />

    <BotaoAplicarParaViagem>Aplicar para a Viagem</BotaoAplicarParaViagem>
     
    </DivFormulario>

  );

}



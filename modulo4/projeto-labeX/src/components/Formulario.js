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
background-color:red
color:black
margin-bottom:25px;
border-radius:25px;
cursor: pointer;

`

export const Formulario = () => {

    
  return (
      
    <DivFormulario >

      <BotaoVoltar onClick={() => history.push('/home')} >Voltar</BotaoVoltar> <br></br>

      <h1>Formulário de Aplicação</h1>

      <Select
          type="text"
          placeholder="Escolha uma viagem"
         
        >
          <option value=""></option>
          
        </Select>

          <Input
          type="text"
          placeholder="Nome"

          />
          <Input
          type="number"
          placeholder="Idade"/>

          <Input
          type="text"
          placeholder="Profissão"
          />

          <Select
          type="text"
          placeholder="Escolha um país"
          >
          <option value="Brasil">Brasil</option>
          
        </Select>

        <Textarea 
        type="text"
        placeholder="Texto de candidatura"
      
        />

    </DivFormulario>


  );


}



import React, {  useState,useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const DivFormulario = styled.div`
display :grid;
margin-top:100px;
align-items: center;
justify-content: center;
F

`
const BotaoVoltar = styled.button`
background-color:red
color:black
margin-bottom:25px;
border-radius:25px;
cursor: pointer;

`
const BotaoCriar = styled.button`
background-color:red
color:black
margin-bottom:25px;
border-radius:25px;
cursor: pointer;

`
export const CriarViagem = () => {

    const history = useHistory()
    const criarViagem = async () => {
        
            history.push("/criarviagem");
            
    
    
        await
          axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius/trips')
            .then((res) => {
              console.log(res.data.trips)
              setData(res.data.trips)
            }).catch((err) => {
              console.log(err.response)
            })
      }
    
  return (
      
    <DivFormulario >
        <h1>Criar Viagem</h1>
        
      <Input
          type="text"
          placeholder="Nome"
         
       />
          <Select
          type="text"
          placeholder="Escolha um planeta"
          >
          <option value="Mercúrio"></option>
          <option value="Vênus"></option>
          <option value="Terra"></option>
          <option value="Marte"></option>
          <option value="Jupiter"></option>
          <option value="Saturno"></option>
          <option value="Urano"></option>
          <option value="Netuno"></option>
          <option value="Plutão"></option>
        </Select>
       

          <Input
          type="text"
          placeholder="Descrição"

          />
          <Input
          type="number"
          placeholder="Duração em dias"
          />
            <BotaoVoltar onClick={() => history.push('/')} >Voltar</BotaoVoltar> <br></br>
            <BotaoCriar>Criar</BotaoCriar>

    </DivFormulario>

  );

}



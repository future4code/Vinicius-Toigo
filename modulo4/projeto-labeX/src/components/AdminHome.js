import styled from 'styled-components'
import React from 'react';
import {useHistory} from 'react-router-dom';

const BotaoVoltar = styled.button`
background-color:red
color:black
margin-bottom:25px;
border-radius:25px;
cursor: pointer;

`
const BotaoCriarViagem = styled.button`
background-color:red
color:black
margin-bottom:25px;
border-radius:25px;
cursor: pointer;

`
const BotaoLogout = styled.button`
background-color:red
color:black
margin-bottom:25px;
border-radius:25px;
cursor: pointer;

`

export const AdminHome = () => {
    const history = useHistory()

    const vaParaPaginaAdmin = ()=>{
        history.push("/adminhome");
        }
    <div>
        <BotaoVoltar onClick={() => history.push('/')} >Voltar</BotaoVoltar> <br></br>
        <BotaoCriarViagem> Criar Viagem</BotaoCriarViagem>
        <BotaoLogout>Logout</BotaoLogout>

        <h1>Painel Administrativo</h1>
        

    </div>

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

    return 

    

}
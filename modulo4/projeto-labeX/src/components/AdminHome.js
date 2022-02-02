import styled from 'styled-components'
import {useHistory} from 'react-router-dom';
import React, {  useState,useEffect } from 'react';
import axios from 'axios';

const BotaoVoltar = styled.button`

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
const DivDosBotoes = styled.div`
display:grid;
margin-top:50px;
align-items: center;
justify-content: center;  


`
const BotaoCriarViagem = styled.button`
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
const BotaoLogout = styled.button`
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

export const AdminHome = () => {


  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token === null) {
        console.log ('Não está logado!')
        history.push ('/login')
    }

}, [])


    const history = useHistory()

    const vaParaPagina = ()=>{
        history.push("/adminhome");
      
          
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
          
    <DivDosBotoes>
          <h1>Painel Administrativo</h1>
          
          <BotaoVoltar onClick={() => history.push('/')} >Voltar</BotaoVoltar> 
          <BotaoCriarViagem onClick={()=> history.push('criarviagem')}> Criar Viagem</BotaoCriarViagem>
          <BotaoLogout>Logout</BotaoLogout>

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

    
    
        )
}
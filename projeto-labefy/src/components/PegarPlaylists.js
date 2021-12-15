import criarPlaylist from './components/criarPlaylist'
import PegarPlaylists from './components/PegarPlaylists'
import axios from 'axios';
import styled from 'styled-components'
import React from 'react';

const Principal =styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-bottom:35px;

`

const Botao =styled.div`
margin-top:15px;
background-color:green;
border-radius:5px;
width:65px;
height:25px;
cursor:pointer;
text-align:center;
`




export default class PegarPlaylists extends React.Component{

 

  escolheTela =()=> {
    switch(this.state.telaAtual){
        case"PegarPlaylists":
        return <App/>
        case"App":
        return <PegarPlaylists/>
        default:
            return <div>Erro! Página não encontrada!</div>
    }




  }
  
  pegarPlaylists = () => {
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    
    const autorizacao = {
      headers: {
        Authorization: "vinicius-lussani-Joy"
      }
    }

    axios.get(URL, autorizacao)
    .then((response) => {
      this.setState({textoInput:""})
      
    })
    .catch((error) => {alert(error)})
    
  }

  render() {
    return (
      <Principal>
        <h1>Bem-vindo ao Labefy</h1>
        <h2>Crie suas playlists e as edite a qualquer momento!</h2>

        <input placeholder="Nome da Playlist" 
        value={this.state.textoInput} 
        onChange={this.mudaTextoInput} /> 
        <Botao onClick={this.pegarPlaylists}>Criar</Botao>
        
        
      </Principal>
    );
  }
}
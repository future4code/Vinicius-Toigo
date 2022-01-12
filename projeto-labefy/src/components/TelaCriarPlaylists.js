import React from 'react';
import axios from 'axios'
import styled from 'styled-components'


const H3Estilizado=styled.div`
margin-left:15%;
margin-top:5%;
`
const ButtonCriar=styled.button`
margin-top:15px;
background-color:green;
border-radius:5px;
width:65px;
height:25px;
cursor:pointer;
text-align:center;
margin-left: 5%;

`
const InputEstilizado=styled.input`
margin-left:15%;
border-radius:4px;

`


class TelaCriarPlaylists extends React.Component {

  state = {
    textoInput: ""
  }

  mudaTextoInput = (event) => {
    this.setState({textoInput: event.target.value})
    console.log(this.state.textoInput)
  }

  CriarPlaylist = () => {
    let URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    let body = {
        "name": this.state.textoInput 
    }
    let autorizacao = {
      headers: {
        Authorization: "vinicius-lussani-joy"
      }
    }

    axios.post(URL, body, autorizacao)
    .then((response) => {
      this.setState({textoInput:""})
      alert("Playlist Criada com sucesso!")
    })
    .catch((error) => {alert(error)})
  }
  render(){
  return (


     <div>
        <H3Estilizado>Criar Playlist</H3Estilizado>
        <div>
            <InputEstilizado placeholder="Nome da Playlist" value={this.state.textoInput} onChange={this.mudaTextoInput} />
            <ButtonCriar onClick={this.CriarPlaylist}>Criar</ButtonCriar>
        </div>
      </div>
  )}
}

export default TelaCriarPlaylists
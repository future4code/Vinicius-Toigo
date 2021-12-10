import logo from './logo.svg';
// import './App.css';
import React from "react";
import axios from 'axios';
import styled from 'styled-components'


const Formulario =styled.div`
display:flex;
flex-direction:column;
align-items:center;
color:black;
margin-top:25px;

`

export default class App extends React.Component {
  state = {
    labenusers: [],
    inputName:'',
    inputEmail: ''
  }
  componentDidMount() {
  this.getUser ()
      }

getUser = () => {
  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
  { 
    headers:{
      Authorization: "vinicius-lussani-joy"
    }

  })
  .then((res) => {
    this.setState({ labenusers: res.data })
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err.response.data)
  })
}

changeName = (e) => {
  this.setState({inputName: e.target.value });
};

changeEmail = (e) => {
  this.setState({inputEmail: e.target.value });
};

createUser = () => {
  const URL =
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

  const body = {

      name: this.state.inputName,
      email: this.state.inputEmail
  };
  const headers = {
    headers: {Authorization: "vinicius-lussani-joy"}
  }

  axios
  .post(URL, body, headers)
  .then((res) => {
    alert('Usuário criado com sucesso')
    this.getUser();
  })
  .catch((err) => {
    alert('Aconteceu um erro na matrix, tente novamente!')
    
  });

}

  render () {
    return (
      <Formulario>
       <h1>Seção de cadastro</h1> 
      <Formulario>
        <input 
        placeholder={'Digite o nome do usuário'}
        value = {this.state.inputName}
        onChange = {this.changeName}
        />
      </Formulario>

        <Formulario>
        <input
        placeholder = {'Digite o seu e-mail'}
        value = {this.state.inputEmail}
        onChange = {this.changeEmail}
        />
        </Formulario> <br />
       <button onClick={this.createUser}>Enviar</button>

      </Formulario>
    );
  }

}
import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Formulario = styled.div `
  margin: 20px;
`
const Input = styled.input `
  margin-right: 10px;
`

class App extends React.Component {
  state = {
 
        postagens: [
        {
          nomeUsuario:"paulinha",
          fotoUsuario:"https://picsum.photos/50/53",
          fotoPost:"https://picsum.photos/200/153",
        },
        {
          nomeUsuario:"vinicius",
          fotoUsuario:"https://picsum.photos/50/51",
          fotoPost:"https://picsum.photos/200/151",
        },
        {
          nomeUsuario:"bruna",
          fotoUsuario:"https://picsum.photos/50/52",
          fotoPost:"https://picsum.photos/200/152",
        
        },
        ],
        valorInputNome: "",
        valorInputFotoPerfil: "",
        valorInputFotoPost: ""
  };

  adicionarPostagem = () => {
  
    const novaPostagem = {
       nomeUsuario: this.state.valorInputNome,
       fotoUsuario: this.state.valorInputFotoPerfil,
       fotoPost: this.state.valorInputFotoPost
    };

    const novaPostagens = [...this.state.postagens, novaPostagem];

    this.setState({
      postagens: novaPostagens,
      valorInputNome: "",
      valorInputFotoPerfil: "",
      valorInputFotoPost: "",
    });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFotoPerfil = (event) => {
    this.setState({ valorInputFotoPerfil: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaDePostagens = this.state.postagens.map((postagem) => {
      return (
        <Post
          nomeUsuario = {postagem.nomeUsuario}
          fotoUsuario = {postagem.fotoUsuario}
          fotoPost = {postagem.fotoPost}
        />
      )
    });

    return (
      <MainContainer>
        <Formulario>
          <Input 
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />

           <Input 
            value={this.state.valorInputFotoPerfil}
            onChange={this.onChangeInputFotoPerfil}
            placeholder={"Foto Perfil"}
          />

          <Input 
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto Post"}
          />
          <button onClick={this.adicionarPostagem}>Adicionar</button> 
        </Formulario>  
        {listaDePostagens}
      </MainContainer>
    );
  }
}
      
      
        

  export default App;
          
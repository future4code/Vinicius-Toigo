import React from "react";
import styled from "styled-components";
import axios from "axios"
import { baseUrl, axiosConfig } from "../../constants";

const PlaylistCreationFormContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:grey
`

const PlaylistCreationForm = styled.form`   
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const ButtonEstilizado3=styled.button`
border-radius:20px;
background-color:white;
border: 4px solid black;
cursor:pointer;
box-shadow: 0px 2px 2px lightgrey;
`

class PlaylistCreationPage extends React.Component {
    state = {
        inputNameValue: ""
    }

    changeInputnameValue = (e) => {
        this.setState({inputNameValue: e.target.value})
    }

    createPlaylist = (e) => {
        e.preventDefault();
        const body = {
            name: this.state.inputNameValue
        };

        axios.post(baseUrl, body, axiosConfig).then(() => {
            alert('Playlist criada com sucesso')
        }).catch(err => [
            console.log(err)
        ]);
        this.setState({inputNameValue: ""});
    };
    
    render () {
        return (
            <PlaylistCreationFormContainer>
                <h1>Criar nova Playlist</h1>
                <PlaylistCreationForm onSubmit={this.createPlaylist} >
                   
                    <input 
                        placeholder="Nome da Playlist"
                        type="text"
                        value={this.state.inputNameValue}
                        onChange={this.changeInputnameValue}
                    />
                    <ButtonEstilizado3 type="submit">Criar Playlist</ButtonEstilizado3>
                </PlaylistCreationForm>
            </PlaylistCreationFormContainer>
        );
    };
};

export default PlaylistCreationPage
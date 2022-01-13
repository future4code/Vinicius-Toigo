import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

class TelaListaDePlaylists extends React.Component {

    state = {
        playlists: []
    }

    componentDidMount() {
        this.pegaPlaylists()
        
    }

    pegaPlaylists = () =>{
        let URL= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        let autorizacao = {
            headers: {
                authorization: "vinicius-lussani-joy"
            }
        }
        axios.get(URL, autorizacao)
        .then((response)=>{ this.setState({playlists: response.data.result.list})})
        .catch((error)=>{console.log(error)})
    }
    

    deletaPlaylists=(id) => {
        
        const url =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url,{
            headers:{
                Authorization: "vinicius-lussani-joy"
        }
            
            }
          )
          .then(() => {
            alert("Playlist apagada com sucesso!");
            this.pegaPlaylists();
            
          })
          .catch((err) => {
              alert("Ocorreu um erro ao apagar a playlist")
            console.log(err.response.data)
          })
        }
  

        // adicionaTrack=()=>{

        //     const url=`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks`
        //     const body = {
        //         "name": "string", 
        //         "artist": "string",
        //         "url": "string"
        //     }
        //     axios.post(url,body,{
        //         headers:{
        //             Authorization: "vinicius-lussani-joy"


        //     }

        // }
        //     )


            




    render() {

        let playListsMap = this.state.playlists.map((playlist)=>{
            return <p> <strong> Nome:</strong> {playlist.name} <button onClick={() => this.deletaPlaylists(playlist.id)}>x</button><br /> 
                <strong>ID:</strong> {playlist.id}
            </p>
        })

        return(
            <div key={playListsMap.id}>
                <h2>Quantidade de playlists: {playListsMap.length}</h2>

                <p> {playListsMap} </p>
            </div>
        )
    }

}
export default  TelaListaDePlaylists
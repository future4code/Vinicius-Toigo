
import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardInfo from './components/CardGrande/CardInfo';
import ImagemButton from './components/ImagemButton/ImagemButton';




import Foto from './components/img/v.png';
import Foto2 from './components/img/pro.png';
import Foto3 from './components/img/email.png';
import Foto4 from './components/img/home.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Foto}
          nome="Astrodev" 
          descricao="Oi, meu nome é Vinícius. Sou um programador web fullstack. Gosto de programação e meu sonho é trabalhar na área."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

    
        <CardInfo 
        imagem={Foto3}    
        imagem2={Foto4}
        nome={"E-mail: viniciuslussani@gmail.com"}  
        descricao={"Endereço: Montauri-RS"} 

        />
      


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Foto2}
          nome="Labenu" 
          descricao="Projetos : Lojas Virtuais, Portfolios, Landing Pages" 
        />
        
    
       
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

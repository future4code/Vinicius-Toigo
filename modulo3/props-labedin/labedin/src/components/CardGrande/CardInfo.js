import React from 'react';


      function CardInfo(props) {
        return (
         
          <div className="bigcard-container">
          <img src={ props.imagem } />
          <img src={ props.imagem2 } />
          <div>
              <p>{ props.nome }</p> <br/>
              <p>{ props.descricao }</p>
          </div>
      </div>
        );
      };
export default CardInfo;
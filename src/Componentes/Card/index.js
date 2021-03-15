import React from 'react';
import './style.css';
import imagem1 from './computador.jpg';

function Card() {
     return(
        <div className="card-container">
           <p>Técnico em Rede de Computadores.</p>
           <img src={imagem1} alt="imagem" className="imagem1" />
           <p>Carga Horária 11255 horas.</p>
           <p>Preço Gratuito.</p>
        </div>
     );
}

export default Card;
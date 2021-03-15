import React from 'react';
import './style.css';
import imagem3 from './gestao.jpg';

function Card2() {
    return(
        <div className="card-container">
        <p>Técnico em Gestão</p><br></br>
        <img src={imagem3} alt="imagem" className="imagem3" />
        <p>Carga Horária 30 Horas</p>
        <p>Preço gratuito</p>
        </div>
    );
}

export default Card2;
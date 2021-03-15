import React from 'react';
import './style.css';
import imagem2 from './desenho-mecânico.jpg';

function Card1() {
    return(
        <div className="card-container">
        <p>Técnico em Mecânica</p><br></br>
        <img src={imagem2} alt="imagem" className="imagem2" />
        <p>Carga Horária 14 Horas</p>
        <p>Preço gratuito</p>
        </div>
    );
}

export default Card1;
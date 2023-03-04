import React from 'react';
import './JuegoDificultad.css';
import easyMorty from '../assets/easy-morty.jpeg';
import mediumMorty from '../assets/medium-morty.jpeg';
import hardMorty from '../assets/hard-morty.jpeg';

const JuegoDificultad = ({handleDificulty}) => {
  return (
    <div className="juego-dificultad">
        <div onClick={handleDificulty} className="facil" >
            <h3 data-dificulty='Facil'>Facil</h3>
            <img src={easyMorty} alt="Deficultad facil" data-dificulty='Facil'/>
        </div>
        <div onClick={handleDificulty} className="medio" >
            <h3 data-dificulty='Medio'>Medio</h3>
            <img src={mediumMorty} alt="Deficultad media" data-dificulty='Medio'/>
        </div>
        <div onClick={handleDificulty} className="dificil">
            <h3 data-dificulty='Dificil'>Dificil</h3>
            <img src={hardMorty} alt="Deficultad dificl" data-dificulty='Dificil'/>
        </div>
    </div>
  )
}

export default JuegoDificultad
import React from 'react';
import './JuegoDificultad.css';

const JuegoDificultad = ({handleDificulty}) => {
  return (
    <div className="juego-dificultad">
        <div onClick={handleDificulty} className="facil" >
            <h3 data-dificulty='Facil'>Facil</h3>
            <img src="/src/assets/easy-morty.jpeg" alt="Deficultad facil" data-dificulty='Facil'/>
        </div>
        <div onClick={handleDificulty} className="medio" >
            <h3 data-dificulty='Medio'>Medio</h3>
            <img src="/src/assets/medium-morty2.jpeg" alt="Deficultad media" data-dificulty='Medio'/>
        </div>
        <div onClick={handleDificulty} className="dificil">
            <h3 data-dificulty='Dificil'>Dificil</h3>
            <img src="/src/assets/hard-morty.jpeg" alt="Deficultad dificl" data-dificulty='Dificil'/>
        </div>
    </div>
  )
}

export default JuegoDificultad
import React from 'react'
import { Link } from 'react-router-dom'
import './Winner.css'

export const Winner = ({setWon, setErrores}) => {
  
  const handleClick = () => {
    setWon(false);
    setErrores(0);
  }

  return (
    <div className='box-winner'>
      <h2>Ganaste!</h2>
        <div className="botones-winner">
          < Link to="/juego" onClick={handleClick} className="boton-winner">Volver a Jugar</Link>
          < Link to="/" onClick={handleClick} className="boton-winner">Inicio</Link>
        </div>
    </div>
  )
}

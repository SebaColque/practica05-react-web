import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import './Juego.css';
import waveLine from '../assets/Wave-Line.svg';

const Juego = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className='juego' >
        <h3 style={{textAlign: "center", padding:"2rem", margin:"unset"}}>Juego de Memoria</h3>
        <div className={`botones-juego ${theme}`}>
            < Link to="default" className="link-juegos">
                Default
            </Link>
            < Link to="personalizado" className="link-juegos">
                Personalizado
            </Link>
        </div>
        <div className="decoracion">
            <img src={waveLine} alt="Decoracion" />
        </div>
    </div>
  )
}

export default Juego
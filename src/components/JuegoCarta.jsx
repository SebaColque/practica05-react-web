import React from 'react';
import './JuegoCarta.css';

export const JuegoCarta = ({img, orden, handleClick}) => {

  return (
    <div className="flip-card-juego" onClick={(e) => handleClick(e, img)}>
        <div className="flip-card-inner-juego">
            <div className="flip-card-front-juego">
                <img src="/src/assets/portal-rick-and-morty-imagen.png" alt="Back Carta"/>
                {/* <img src={img} alt="Carta" style={{width:"150px", height:"150px"}} /> */}
            </div>
            <div className="flip-card-back-juego">
                <img src={img} alt="Carta" />
                {/* <img src="/src/assets/portal-rick-and-morty-imagen.png" alt="Back Carta" /> */}
            </div>
        </div>
    </div>
  )
}

import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../context/ThemeContext';
import './JuegoImagenesGuardadas.css'

const JuegoImagenesGuardadas = ({closeModal, handleCargarImg}) => {
  const [elimiando, setElimiando] = useState(false);

  const {theme} = useContext(ThemeContext);

    const nombresLocalStorage = [];

    for(let i=0; i<localStorage.length; i++) localStorage.key(i).includes('theme') ? null : nombresLocalStorage.push(localStorage.key(i));

    const handleClick = (e) => {
        e.stopPropagation()
        const nombre = e.target.innerText.slice(0, -2);
        closeModal();
        handleCargarImg(nombre);
    }

    const handleRemove = (e) => {
      e.stopPropagation()
      const nombre = e.target.parentElement.innerText.slice(0, -2);
      localStorage.removeItem(nombre);
      setElimiando(true);
    }

    useEffect(() => {
      setElimiando(false);
    }, [elimiando])

  return (
    <div className={theme}>
        <h1 style={{marginTop:"2rem"}}>Nombres de sets de imagenes guardadas</h1>
        {nombresLocalStorage.map((nombre, index) => 
        <div key={index} className='elem-local-storage' onClick={handleClick}>
          {nombre}
          <button className='btn-eliminar-set' onClick={handleRemove}>X</button>
        </div>
        )}
        {nombresLocalStorage.length===0 && <h3>No hay imagenes guardadas</h3>}
    </div>
  )
}

export default JuegoImagenesGuardadas
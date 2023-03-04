import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import './Inicio.css';
import rickInicio from '../assets/rick-inicio.jpg'
import wave1 from '../assets/Wave1.svg'
import wave2 from '../assets/Wave2.svg'

const Inicio = () => {
  const {theme} = useContext(ThemeContext);

  // useEffect(() => {
  //   const getRespone = async () => {
  //     try {
  //       const response = await fetch('http://ec2-3-82-93-203.compute-1.amazonaws.com/api/recipe/ingredients/',
  //       {
  //         method: 'GET',
  //         mode: 'no-cors',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': 'gGWkVAaj81qk4d98fB1HgiC2YPAELfQ3PdfFGC1M3CbZlwRW6G8CLR5sOxxtB4H4',
  //         }
  //       });
  //       const data = await response.json();
  //       console.log(data);
        
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   getRespone();
  // },[])

  const handleProyectoEnter = (e) => {
    document.querySelector('.proyecto2').style.opacity = '0';
    document.querySelector('.proyecto1').style.opacity = '0';
    if(e.target.classList.contains('proyecto1')){
      document.querySelector('.contenedor-proyectos').classList.add('proyecto1-activo')
    } else if(e.target.classList.contains('proyecto2')){
      document.querySelector('.contenedor-proyectos').classList.add('proyecto2-activo')
    }
  }

  const handleProyectoLeave = (e) => {
    document.querySelector('.proyecto1').style.opacity = '1';
    document.querySelector('.proyecto2').style.opacity = '1';
    if(e.target.classList.contains('proyecto1')){
      document.querySelector('.contenedor-proyectos').classList.remove('proyecto1-activo')
    } else if(e.target.classList.contains('proyecto2')){
      document.querySelector('.contenedor-proyectos').classList.remove('proyecto2-activo')
    }
  }

  return (
    <div className={theme} >

      <header>
        <div>
          <img src={rickInicio} alt="" />
        </div>
        <div>
          <h1>Práctica</h1>
          <p>Página creada utilizando React</p>
        </div>
      </header>

      <div className='separador'>
        <img src={wave1} alt="wave" />                          
      </div>

      <main>
        <div className='info'>
          <h2>¿Qué es React?</h2>
          <p>React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres.</p>
        </div>

        <div className='separador' style={{transform:"rotate(180deg)"}}>
          <img src={wave2} alt="wave" />                          
        </div>

        <div className="proyectos">
          <h2>Proyectos</h2>

          <div className="contenedor-proyectos">
            <div className="proyecto proyecto1" onMouseEnter={handleProyectoEnter} onMouseLeave={handleProyectoLeave}>
              <h3 className='proyecto1'>Consumo de API y Buscador</h3>
            </div>
            <div className="proyecto proyecto2" onMouseEnter={handleProyectoEnter} onMouseLeave={handleProyectoLeave}>
              <h3 className='proyecto2'>Juego de Memoria</h3>
            </div>
          </div>

        </div>
      </main>

      <footer>
        <p>Pagina creada por Seba Colque</p>
        <hr />

        <div className="redes">
          <a href="https://www.linkedin.com/in/sebasti%C3%A1n-colque-20a040180/" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/sebacolque01" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://github.com/SebaColque" target="_blank" rel="noreferrer">
            <i className="bi bi-github"></i>
          </a>
          
        </div>
      </footer>

    </div>
  )
}

export default Inicio
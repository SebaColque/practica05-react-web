import React, { useContext, useEffect, useState } from 'react'
import NavMenu from '../components/NavMenu'
import { BrowserRouter as Router, Routes, Route, Navigate, HashRouter, Link } from "react-router-dom";
import Characters from './Characters';
import { infiniteScroll } from '../helpers/infiniteScroll';
import Juego from './Juego';
import JuegoDefault from './JuegoDefault';
import JuegoPersonalizado from './JuegoPersonalizado';
import Inicio from './Inicio';
import ThemeContext, { ThemeProvider } from '../context/ThemeContext';

const Pagina = () => {
  const [endOfPage, setEndOfPage] = useState(false);
  const {theme, handleTheme, toggleTheme} = useContext(ThemeContext)

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const $btnTheme = document.querySelector('.btn-theme');
    if(localTheme && localTheme.includes('color')){
      const valor = localTheme.split('color_mode')[1]
      document.querySelector('#range-theme').value = valor;
      toggleTheme(valor);
      valor > 4 ? $btnTheme.innerText = 'dark_mode' : $btnTheme.innerText = 'light_mode';
    } else{
      $btnTheme.innerText = localTheme==='light_mode' ? 'dark_mode' : 'light_mode';
      handleTheme({target: {innerText: localTheme}});
    }
  }, [])
  
  useEffect(() => {
    infiniteScroll({setEndOfPage});
  }, [endOfPage])

  return (
    <div className={theme} >
        < HashRouter>
              < NavMenu />
              <Routes>
                  <Route path="/" element={< Inicio />} />
                  
                  <Route path="/personajes" element={< Characters endOfPage={endOfPage} setEndOfPage={setEndOfPage} />} />
                  
                  <Route path="/juego" element={< Juego />} />
                  <Route path="/juego/default" element={< JuegoDefault />} />
                  <Route path="/juego/personalizado" element={< JuegoPersonalizado />} />
              </Routes>
          </HashRouter> 
    </div>
  )
}

export default Pagina
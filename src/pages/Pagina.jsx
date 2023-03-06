import React, { useContext, useEffect, useRef, useState } from 'react'
import NavMenu from '../components/NavMenu'
import { Routes, Route, HashRouter } from "react-router-dom";
import Characters from './Characters';
import { infiniteScroll } from '../helpers/infiniteScroll';
import Juego from './Juego';
import JuegoDefault from './JuegoDefault';
import JuegoPersonalizado from './JuegoPersonalizado';
import Inicio from './Inicio';
import ThemeContext from '../context/ThemeContext';

const Pagina = () => {
  const [endOfPage, setEndOfPage] = useState(false);
  const {theme, handleTheme, toggleTheme} = useContext(ThemeContext);

  const btnTheme = useRef();
  const rangeTheme = useRef();

  useEffect(() => {

    const localTheme = window.localStorage.getItem('theme');
    const $btnTheme = btnTheme.current;

    if(localTheme && localTheme.includes('color')){
      const valor = localTheme.split('color_mode')[1]
      rangeTheme.current.value = valor;
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
              < NavMenu btnTheme={btnTheme} rangeTheme={rangeTheme} />
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
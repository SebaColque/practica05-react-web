import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import './NavMenu.css';
import portalLogo from '../assets/portal-rick-and-morty-imagen.webp';


const NavMenu = ({btnTheme, rangeTheme}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {theme, handleTheme, toggleTheme} = useContext(ThemeContext)

    const handleMenuResponsive = (e) => {
        if(e.target.innerText === 'menu'){
            setMenuOpen(true);
            return;
        }
        setMenuOpen(false);
    }

    const handleChange = (e) => {

        toggleTheme(e.target.value);

        if(parseInt(e.target.value) > 4){
            btnTheme.current.innerText = 'dark_mode';
            return;
        } else if(parseInt(e.target.value) <= 4){
            btnTheme.current.innerText = 'light_mode';
            return;
        }
    }

  return (
    <div style={{position:"sticky", top:"-1px", zIndex:"999"}}>
        <nav className='nav-menu'>
            <div className="logo">
                < Link to="/" activeclassname='active'>
                    <img src={portalLogo} alt="Imagen portal home" />
                </Link>
            </div>
            <div className={`links-menu ${menuOpen && 'responsive-menu'}`} >
                < NavLink to="/" activeclassname='active' onClick={handleMenuResponsive}>
                    <i>Inicio</i>
                </NavLink>
                < NavLink to="/personajes" activeclassname='active' onClick={handleMenuResponsive}>
                    <i>Personajes</i>
                </NavLink>
                < NavLink to="/juego" activeclassname='active' onClick={handleMenuResponsive}>
                    <i>Juego</i>
                </NavLink>
                <span className={`material-symbols-outlined close-menu`} onClick={handleMenuResponsive}>
                    close
                </span>
                <div className='theme-btns'>
                    <span className={`material-symbols-outlined btn-theme ${theme}`} ref={btnTheme} onClick={handleTheme}>
                        dark_mode
                    </span>
                    <input type="range" min='0' max='9' id='range-theme' ref={rangeTheme} onChange={handleChange}/>
                </div>
            </div>
            <span className="material-symbols-outlined btn-menu" onClick={handleMenuResponsive}>
                menu
            </span>
        </nav>
    </div>
  )
}

export default NavMenu;
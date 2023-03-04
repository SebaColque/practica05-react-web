import React, { useContext, useEffect, useState } from 'react'
import { JuegoCarta } from '../components/JuegoCarta'
import JuegoDificultad from '../components/JuegoDificultad';
import { Winner } from '../components/Winner';
import ThemeContext from '../context/ThemeContext';
import './JuegoDefault.css';

const JuegoDefault = ({imagenesPerso}) => {
    const [imgs, setImgs] = useState([]);
    const [orden, setOrden] = useState([])
    const [cartaSeleccionadas, setCartaSeleccionadas] = useState([]);
    const [won, setWon] = useState(false);
    const [errores, setErrores] = useState(0);
    const [dificultad, setDificultad] = useState('');
    const [click, setClick] = useState(false);

    const {theme} = useContext(ThemeContext)

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

    useEffect(() => {

        
        if(imagenesPerso) {
            setImgs([...shuffleArray(imagenesPerso), ...shuffleArray(imagenesPerso)]);

        } else {

            const numeroRandom = [],
                imagenesRandom = [];

            while (numeroRandom.length < 4) {
                const numeroAleatorio = Math.floor(Math.random() * 826) + 1;
                if (!numeroRandom.includes(numeroAleatorio)) {
                    numeroRandom.push(numeroAleatorio);
                }
            }

            for(let number in numeroRandom){
                // setImgs(prevState => [...prevState, `https://rickandmortyapi.com/api/character/avatar/${numeroRandom[number]}.jpeg`,
                //                     `https://rickandmortyapi.com/api/character/avatar/${numeroRandom[number]}.jpeg`])
                imagenesRandom.push(`https://rickandmortyapi.com/api/character/avatar/${numeroRandom[number]}.jpeg`);
                imagenesRandom.push(`https://rickandmortyapi.com/api/character/avatar/${numeroRandom[number]}.jpeg`);
            }
            setImgs(shuffleArray(imagenesRandom));
        }
    }, [])

    useEffect(() => {
        const $allCarts = document.querySelectorAll('.flip-card-juego');

        let tiempo;

        switch (dificultad) {
            case 'Facil':
                tiempo = 3000;
                break;
        
            case 'Medio':
                tiempo = 2000;
                break;
            
            case 'Dificil':
                tiempo = 1000;
                break;

            default:
                break;
        }
        setTimeout(() => {
            $allCarts.forEach(el => el.classList.add('show-cart'));
            setTimeout(() => {
                $allCarts.forEach(el => el.classList.remove('show-cart'));
                setClick(true);
            }, tiempo)
        }, 700)

    }, [dificultad])

    const handleClick = (e, selected) => {
        e.target.parentNode.parentNode.parentNode.classList.add('show-cart');
        setCartaSeleccionadas([...cartaSeleccionadas, selected]);
        if(cartaSeleccionadas.length===1){
            setClick(false);
            if(cartaSeleccionadas[0]===selected){
                setCartaSeleccionadas([]);
                setClick(true);
            } else{
                const $allCarts = document.querySelectorAll('.flip-card-juego');
                setTimeout(() => {
                    $allCarts.forEach(el => el.classList.remove('show-cart'));
                    setErrores(errores + 1);
                    setClick(true)
                }, 700)
                setCartaSeleccionadas([]);
            }
        }
        
        const $allCartsShowed = document.querySelectorAll('.show-cart');
        if($allCartsShowed.length === imgs.length){
            setTimeout(() => setWon(true), 700);
        } 
    }

    const handleDificulty = (e) => {
        setDificultad(e.target.getAttribute('data-dificulty'));
        setClick(false);
    }


  return (
    <div className={`juego-default ${theme}`}>
        {!dificultad && click && < JuegoDificultad handleDificulty={handleDificulty} /> }
        {!click && <div className='tapar'></div>}
        {dificultad &&
        <>
            <div className="box-cajas">
                {imgs.map((el, index) => < JuegoCarta key={index} img={el} 
                                                            orden={orden[index]} handleClick={handleClick} />)}
            </div>
            <h4 className='contador-errores'>Errores: {errores}</h4>
        </>
        }
        {won && < Winner setWon={setWon} setErrores={setErrores} />}
    </div>
  )
}

export default JuegoDefault
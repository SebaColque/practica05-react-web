import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import './CharacterCard.css';

const CharacterCard = ({pj, search, pageNumber}) => {
    const {theme} = useContext(ThemeContext);

    let { id, name, image, species, status, location, gender } = pj;
   
    species = species==='Human' ? 'humano' : 'alien';
    status = status==='Alive' ? 'vivo' : 'muerto';
    gender = gender=== 'Male' ? 'hombre' : 'mujer';

    let show = false,
        reset = false;

    if(id <= pageNumber) {
        show = true;
    }
    if(search) {
        show = false;
        const {nombre, especie, genero, estado} = search;

        if(!nombre && !especie && !genero && !estado) {
            reset = true;
        }

        if((name.toLowerCase().includes(nombre.toLowerCase()) || !nombre)
        &&
        (species.toLowerCase().includes(especie.toLowerCase()) || !especie)
        &&
        (status.toLowerCase().includes(estado.toLowerCase()) || !estado)
        &&
        (gender.toLowerCase().includes(genero.toLowerCase()) || !genero)
        ) {
            show = true;
            // setCountCharacters(prevState => prevState + 1);
        };
    }

  return (
    <>  
    {/* Se renderiza cuando no se hizo ninguna busqueda y/o se resetea el search */}
        {(search===null || reset) && show &&
            <div className={`flip-card ${species==='humano' ? 'humano': 'alien' }`} >
                <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                        <img src={image} alt={`Imagen de ${name}`} className="imagen-carta"/>
                        <h3 className={theme} >{name}</h3>
                    </div>
                    <div className="flip-card-back">
                        <h3>{name}</h3>
                        <p><b>Especie:</b> {species==='humano' ? 'Humano': 'Alien' }</p>
                        <p><b>Género:</b> {gender==='hombre' ? 'Hombre' : 'Mujer' }</p>
                        <p><b>Estado:</b> {status==='vivo' ? 'Vivo' : 'Muerto'}</p>
                        <p><b>Ubicacion actual:</b> {location.name}</p>
                    </div>
                </div>
            </div>
        }
    {/* Se renderiza cuando se hace una search */}
        {search && show &&
            <div className={`flip-card ${species==='humano' ? 'humano': 'alien' }`} >
                <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                        <img src={image} alt={`Imagen de ${name}`} className="imagen-carta"/>
                        <h3 className={theme} >{name}</h3>
                    </div>
                    <div className="flip-card-back">
                        <h3>{name}</h3>
                        <p><b>Especie:</b> {species==='humano' ? 'Humano': 'Alien' }</p>
                        <p><b>Género:</b> {gender==='hombre' ? 'Hombre' : 'Mujer' }</p>
                        <p><b>Estado:</b> {status==='vivo' ? 'Vivo' : 'Muerto'}</p>
                        <p><b>Ubicacion actual:</b> {location.name}</p>
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default CharacterCard;
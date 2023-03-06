import React, { useContext, useEffect, useRef, useState } from 'react'
import { useModal } from '../hooks/useModal';
import JuegoDefault from './JuegoDefault';
import JuegoImagenesGuardadas from '../components/JuegoImagenesGuardadas';
import JuegoPersonalizadoDragAndDrop from '../components/JuegoPersonalizadoDragAndDrop'
import Modal from '../components/Modal';
import './JuegoPersonalizado.css'
import ThemeContext from '../context/ThemeContext';

const JuegoPersonalizado = () => {
    const [imagenesPerso, setImagenesPerso] = useState([]);
    const [jugar, setJugar] = useState(false);
    const [todasCargadas, setTodasCargadas] = useState(false);

    const [isOpenModalCargar, openModalCargar, closeModalCargar] = useModal(false);
    const [isOpenModalGuardar, openModalGuardar, closeModalGuardar] = useModal(false);

    const [files, setFiles] = useState([]);
    const [tituloDragDrop, setTituloDragDrop] = useState('');

    const {theme} = useContext(ThemeContext);
    
    const inputNombreSet = useRef();
    
    const handleRemove = (img) => {
        const newImgs = imagenesPerso.filter(image => image !== img);
        setImagenesPerso(newImgs);
    }

    const handleJugar = () => setJugar(true);

    const handleSaveImg = () => {
        const $input = inputNombreSet.current;
        const nombre = $input.value;

        if(nombre)localStorage.setItem(nombre, JSON.stringify(imagenesPerso))
        else return

        closeModalGuardar();
    }

    const handleCargarImg = (nombre) => {
        let imgs = localStorage.getItem(nombre);
        imgs = JSON.parse(imgs);
        setImagenesPerso(imgs);
    }

    const handleInputFile = (e) => {
        const files = Array.from(e.target.files);
        setFiles(files);
    }

    const uploadFile = (file) => {
        if(file.type.split('/')[0] !== 'image') {
            setTituloDragDrop('Debe ser una imagen!')
            return;
        }

        const reader = new FileReader();

        reader.addEventListener('load', e => {
            const content = reader.result;
            if(imagenesPerso.includes(content)){
                setTituloDragDrop(`La imagen "${file.name}" ya fue cargada!`)
                return;
            }
            setImagenesPerso(prevState => [...prevState, content]);
        });

        reader.readAsDataURL(file)
    }

    useEffect(() => {
        if(files.length + imagenesPerso.length <= 4) {
            files.forEach(file => uploadFile(file))
        } else{
            setTituloDragDrop('Máximo 4 imagenes!')
        }
    }, [files])
    
    useEffect(() => {
        if(imagenesPerso.length >= 4) {
            setTodasCargadas(true);
        } else {
            setTodasCargadas(false);
        }
    }, [imagenesPerso])

  return (
    <div className='juego-personalizado'>
        {!jugar &&
        <div>

            <div className="titulo-juego-personalizado">

                <h2 style={{textAlign:"center", marginTop:"1rem", marginBottom:'1rem'}}>Elige tus propias imagenes (Máximo 4)</h2>
                <div className="box-cargar-fotos">
                    {!todasCargadas && <button onClick={openModalCargar} className={`boton-cargar-imgs ${theme}`}>Cargar imagenes guardadas</button>}
                    {!todasCargadas && 
                    <>
                    <span className={`material-symbols-outlined boton-cargar-imgs ${theme}`}>
                        download
                        <input type='file' multiple accept='image/*' className='cargar-archivo' onChange={handleInputFile} />
                    </span>
                    </>}
                </div>
                < Modal isOpen={isOpenModalCargar} closeModal={closeModalCargar}>
                    < JuegoImagenesGuardadas closeModal={closeModalCargar} handleCargarImg={handleCargarImg} />
                </Modal>
            </div>

            {!todasCargadas && < JuegoPersonalizadoDragAndDrop setFiles={setFiles} tituloDragDrop={tituloDragDrop} setTituloDragDrop={setTituloDragDrop}/>}

            <div className={`imagenes-cargadas ${theme}`}>
                {imagenesPerso.length!==0 && imagenesPerso.map((img,index) => <img key={index} src={img} alt="Imagen cargada" className='imagen-cargada'
                                                                                onClick={() => handleRemove(img)} />)}
            </div>
            
            {todasCargadas &&
            <div className={`botones-imagenes-cargadas ${theme}`}>
                {<button className={`btn-juego-perso ${theme}`} onClick={handleJugar}>Jugar</button>}
                { <button className={`btn-juego-perso ${theme}`} onClick={openModalGuardar}>Guardar imagenes</button>}
                { 
                    < Modal isOpen={isOpenModalGuardar} closeModal={closeModalGuardar} >
                        <div className="modal-guardar">
                            <label htmlFor="nombre">Guardar las imagenes con el nombre:</label>
                            <input type="text" ref={inputNombreSet} placeholder='Nombre...' autoFocus/>
                            <input type="submit" value="Guardar" onClick={handleSaveImg} />
                        </div>
                    </Modal>}
            </div>}

        </div>
        }
        
        {jugar && < JuegoDefault imagenesPerso={imagenesPerso} />}
    </div>
  )
}

export default JuegoPersonalizado
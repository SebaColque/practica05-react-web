import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import './JuegoPersonalizadoDragAndDrop.css';

const JuegoPersonalizadoDragAndDrop = ({setFiles, tituloDragDrop, setTituloDragDrop}) => {

    const [tituloDropZone, setTituloDropZone] = useState('Arrastra y suelta tus imagenes');

    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        const $dropZone = document.querySelector('.drop-zone');

        $dropZone.addEventListener('dragover', e => {
            e.preventDefault();
            e.stopPropagation();
            e.target.classList.add('is-active')
        })
        
        $dropZone.addEventListener('dragleave', e => {
            e.preventDefault();
            e.stopPropagation();
            e.target.classList.remove('is-active')
        })
        
        $dropZone.addEventListener('drop', e => {
            e.preventDefault();
            e.stopPropagation();
            let files = Array.from(e.dataTransfer.files);
            setFiles(files);

            e.target.classList.remove('is-active')
        })
    }, [])
    
    useEffect(() => {
        // console.log(tituloDragDrop);
        const $dropZone = document.querySelector('.drop-zone');
        if(tituloDragDrop){
            $dropZone.classList.add('is-error');
            setTituloDropZone(tituloDragDrop)

            setTimeout(() => {
                $dropZone.classList.remove('is-error');
                setTituloDropZone('Arrastra y suelta tus imagenes');
                setTituloDragDrop('')
            }, 2000)
        }
    }, [tituloDragDrop])

  return (
    <div>
        <main>
            <div className={`drop-zone ${theme}`}>
                {<p>{tituloDropZone}</p>}
            </div>
        </main>
    </div>
  )
}

export default JuegoPersonalizadoDragAndDrop
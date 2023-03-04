import React, { useState } from 'react';
import './CharacterSearch.css'

export const initalForm = {
    nombre: '',
    especie: '',
    genero: '',
    estado: '',
} 

const CharacterSearch = ({setSearch, setAllCharacters, setPageNumber}) => {
    const [form, setForm] = useState(initalForm);
    const [searchActive, setSearchActive] = useState(false);
    const [refreshSearchBtn, setRefreshSearchBtn] = useState(false)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(form);
        window.scroll(0,0);
        setSearchActive(false);
        setRefreshSearchBtn(true);
    }

    const handleReset = (e) => {
        if(form === initalForm) return;
        setForm(initalForm);
        setSearch(null);
        setAllCharacters([]);
        setPageNumber(10);
        window.scroll(0,0);
        setSearchActive(false);
        setRefreshSearchBtn(false);
    }

    const handleSearchActive = () => {
        setSearchActive(!searchActive);
    }

  return (
    <div className={`character-search ${searchActive && 'active-search'}`}>
        <span onClick={handleReset} className={`material-symbols-outlined refresh-search ${refreshSearchBtn && !searchActive && 'active-refresh'}`}>
            refresh
        </span>
        <span className="material-symbols-outlined search-icon" onClick={handleSearchActive}>
            search
        </span>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre" style={{fontWeight:"bolder", textTransform:"uppercase"}}>Nombre</label>
            <input type="text" name="nombre" id="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre del personaje" autoComplete='off'/>

            <hr />

            <p>Especie</p>
            <label htmlFor="humano">Humano: </label>
            <input type="radio" name="especie" id="humano" value="humano" onChange={handleChange} /><br />
            <label htmlFor="alien">Alien: </label>
            <input type="radio" name="especie" id="alien" value="alien" onChange={handleChange} />

            <hr />

            <p>Género</p>
            <label htmlFor="hombre">Hombre: </label>
            <input type="radio" name="genero" id="hombre" value="hombre" onChange={handleChange}/><br />
            <label htmlFor="mujer">Mujer: </label>
            <input type="radio" name="genero" id="mujer" value="mujer" onChange={handleChange}/>

            <hr />

            <p>Estado</p>
            <label htmlFor="vivo">Vivo: </label>
            <input type="radio" name="estado" id="vivo" value="vivo" onChange={handleChange}/><br />
            <label htmlFor="muerto">Muerto: </label>
            <input type="radio" name="estado" id="muerto" value="muerto" onChange={handleChange}/><br />

            <hr />

            <button type="submit">Buscar</button>
            <button type='reset' onClick={handleReset}>Resetear</button>
        </form>
    </div>
  )
}

export default CharacterSearch;
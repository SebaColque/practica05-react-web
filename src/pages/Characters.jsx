import React, { memo, useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard';
import CharacterSearch from '../components/CharacterSearch';
import ErrorInternet from '../components/ErrorInternet';
import Loader from '../components/Loader';
import './Characters.css'


const Characters = ({endOfPage, setEndOfPage}) => {
    const [allCharacters, setAllCharacters] = useState([]);
    const [search, setSearch] = useState(null);
    const [nextPage, setNextPage] = useState(false);

    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(10);

    const [error, setError] = useState(false)

    const [goUp, setGoUp] = useState(false);

    let url = "https://rickandmortyapi.com/api/character";

    const getCharacter = async (url) => {
        try{
            setLoading(true);
            const res = await fetch(url);
    
            if(!res.ok) throw {resp:'no'};

            setError(false);
            
            const data = await res.json();
            setAllCharacters([ ...allCharacters, ...data.results]);
            setNextPage(data.info.next);
        }

        catch(err){
            setError(true);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if(allCharacters.length === 0) getCharacter(url);
    }, [allCharacters])

    useEffect(() => {
        if(nextPage) getCharacter(nextPage);

        if(endOfPage){
            setPageNumber(pageNumber + 10);
            setEndOfPage(false);
        }
    }, [nextPage, endOfPage])


    const subir = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setGoUp(false);
    }

    window.addEventListener("scroll", () => {
        window.scrollY >= 100 ? setGoUp(true) : setGoUp(false);
    })


  return (
    <div>
        {!error &&
            <div className='characters'>
                
                < CharacterSearch setSearch={setSearch} setAllCharacters={setAllCharacters} setPageNumber={setPageNumber} /> 
                <div className="box-characters">
                    {allCharacters.map(pj => < CharacterCard key={pj.id} pj={pj} search={search} pageNumber={pageNumber}/>)}
                    {loading ? < Loader /> : null}
                </div>
            </div>
        }
        {error && < ErrorInternet />}
        {goUp && <span onClick={subir} className="material-symbols-outlined up-button">keyboard_double_arrow_up</span>}
    </div>
  )
}


export default memo(Characters);
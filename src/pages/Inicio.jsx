import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import './Inicio.css';

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

  return (
    <div className={theme} >
        <h1>Inicio</h1>
    </div>
  )
}

export default Inicio
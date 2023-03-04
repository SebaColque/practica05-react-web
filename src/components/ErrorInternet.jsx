import React from 'react'

const ErrorInternet = () => {
  const errorStyle = {
    height: "calc(100vh - 80px)",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",
    backgroundColor:"rgba(0,0,0,0.2)",
  }

  return (
    <div style={errorStyle}>
        <h1>Ocurrió un error...</h1>
        <h3>Verifique su conexión</h3>
        <h3>Intente nuevamente</h3>
    </div>
  )
}

export default ErrorInternet
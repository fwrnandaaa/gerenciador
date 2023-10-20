import React from 'react'
import Cabecalho from '../../componentes/Cabecalho'
import Rodape from '../../componentes/Rodape'



const Principal = () => {
  return (
    <div>
      
         <Cabecalho
        logo="logo192.png"
        titulo="REACT"
        subtitulo="O melhor gerenciador."
  />
   <Rodape logo="ifrnLogo.png" titulo="oi" Date="mostraData" /> 
    </div>
  )
}

export default Principal
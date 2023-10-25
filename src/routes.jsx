import React from 'react'
import Login from './paginas/LoginUsuario'
import Cadastro from './paginas/Cadastrousuario'
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './paginas/Principal'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Cabecalho
                logo="logo192.png"
                titulo="REACT"
                subtitulo="Mitski"
            />
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />



            </Routes>
            <Rodape logo="ifrnLogo.png" titulo="" Date="mostraData" />
        </BrowserRouter>
    )
}

export default Rotas;
import React from 'react';
import { useState } from "react";

const Estados = () => {
    const [texto, setTexto] = useState("favorito");
    const [nome, setNome] = useState("nome");
    const [url, setUrl] = useState("URL");
    const [favoritos, setFavoritos] = useState([])

    // a const retorna uma variavel e uma função que será responsavel por manipular essa variavel

    function adicionaFavorito(nome, url) {
        let favorito = { nome, url }
        favoritos.push(favorito)
        setFavoritos(favoritos)
        console.log(favoritos)
        //  setFavoritos([...favoritos, favorito])
    }
    function handleInput(valor) {
        setTexto(valor)
    }
    function handleName(valor) {
        setNome(valor)
    }
    function handleUrl(valor) {
        setUrl(valor)
    }
    return (
        <div>
            <h1>Estados</h1>
            <h1>{texto}</h1>
            <input type="text" value={texto} onChange={(e) => handleInput(e.target.value)} />
            <h1>{nome}</h1>
            <input type="text" value={nome} onChange={(e) => handleName(e.target.value)} />
            <h1>{url}</h1>
            <input type="text" value={url} onChange={(e) => handleUrl(e.target.value)} />
            <button onClick={() => adicionaFavorito(nome, url)}> Adicionar</button>
            <h1>Favoritos</h1>
            <ul>
                {favoritos.map(
                    (elemento) => {
                        return (

                            <li>{elemento.nome}</li>

                        )
                    }
                    // essa função recebe um array e retorna as coisa de dentro

                )}

            </ul>
        </div>
    )


}

export default Estados;
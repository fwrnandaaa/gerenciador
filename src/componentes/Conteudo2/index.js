import React, { useState } from 'react'

const Conteudo = () => {
  const [nomeSite, setNomeSite] = useState("");
  const [url, setUrl] = useState("");
  const [favoritos, setFavoritos] = useState([])
  const [importante, setImportante] = useState(false);


  function salvarFavorito() {

    console.log('estados>>>:', { nomeSite, url })
    favoritos.push({ nomeSite, url, importante })
    setFavoritos([...favoritos])
    console.log('favoritos 2>>>:', favoritos)
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    console.log(favoritos[0].nomeSite)
  }


  return (
    <>
      <ul>
        {favoritos[0] != undefined &&
          favoritos.map((favorito) => {
            console.log(favorito)
            return <li key={favorito.nomeSite} style={favorito.importante ? { color: 'red' } : {}}>
              {favorito.nomeSite} -- {favorito.url}
            </li>
          }
          )}

      </ul>


      <div>
        <h1>Conteudo</h1>
        <form >
          <label>
            Nome do Site
          </label>
          <input name='nome_site'
            onChange={(evento) => {
              setNomeSite(evento.target.value);
              console.log(nomeSite);
            }}></input>
          <label>
            URL
          </label>
          <input
            type="url"
            name="url"
            onChange={(evento) => {
              setUrl(evento.target.value);
            }}
          ></input>
          <input type="checkbox" name="chackbox" onChange={(evento) => setImportante(!importante)}></input>
          <label htmlFor="checkbox">Importante </label>

          <button onClick={(e) => { e.preventDefault(); salvarFavorito() }}>Salvar</button>

        </form>
      </div>
    </>
  )
}

export default Conteudo
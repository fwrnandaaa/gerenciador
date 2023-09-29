import React, { useState } from 'react'

const Conteudo = () => {
  const [nomeSite, setNomeSite] = useState("");
  const [url, setUrl] = useState("");
  const[favoritos, setFavoritos]=useState([])

  function salvarFavorito() {
    console.log('favoritos>>>:',favoritos)
    console.log('estados>>>:',{nomeSite,url})
    setFavoritos([...favoritos, {nomeSite,url}])
    console.log('favoritos 2>>>:',favoritos)
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    console.log(favoritos[0].nomeSite)
  }

  return (
    <>
     <ul>
    {favoritos[0]!= undefined &&
      favoritos.map((favorito)=>(
        <li>{favorito.nomeSite} :{favorito.url}</li>
      ))}
    
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
 
        <button onClick={(e) => {e.preventDefault(); salvarFavorito()}}>Salvar</button>
    </form>
    </div>
    </>
  )
}

export default Conteudo
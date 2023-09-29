import React from 'react'

const Conteudo = () => {
  const [nomeSite, setNomeSite] = useState("");
  const [url, setUrl] = useState("");
  const[favoritos, setFavoritos]=useState([])

  function salvarFavorito() {
    console.log('favoritos>>>:',favoritos)
    console.log('estados>>>:',{nomeSite,url})
    setFavoritos([...favoritos, {nomeSite,url}])
    console.log('favoritos 2>>>:',favoritos)
    localStorage.setItem("favorito", JSON.stringify(favoritos));
  }
  return (
    <>
    <ul>
      <li>{favoritos[0]}</li>
    </ul>

    <div>
       <h1>Conteudo</h1>
    <form >
        <label>
            Nome do Site
        </label>
        <input name='nome_site'></input>
        onChange={(evento) => {
          url=evento.target.value
          setNomeSite(evento,target,value);
          console.log(nomeSite);
        }}
        <label>
            URL
        </label>
        <input type="url" name="url"></input>
        <input
          type="url"
          name="url"
          onChange={(evento) => {
            setUrl(evento.target.value);
          }}
        ></input>
        <input type='url' name='url'></input>
        <button >Salvar</button>
        onClick={() => salvarFavorito()}
        {/* <button onClick={() => salvarFavorito()}>Salvar</button> */}
    </form>
    </div>
    </>
  )
}

export default Conteudo
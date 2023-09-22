import React from 'react'

export default function Conteudo() {

  const [favoritos, setFavoritos] = useState([]);

  const [favorito, setFavorito] = useState({ nome: "", url: "" });

  function handleURL(e) {
    return setFavorito({ ...favorito, favorito, url: e.target.value });
  }

  function handleNome(e) {
    return setFavorito({ ...favorito, nome: e.target.value });
  }

  return (
    <div id="div-favorito" className={styles.conteudo}>
      <h1>Adicione seu favorito</h1>
      <form>
        <label htmlFor="favorito_nome">Nome</label>
        <input type="text" onChange={(e) => handleNome(e)} />
        <label htmlFor="favorito_url">URL</label>
        <input type="text" onChange={(e) => handleURL(e)} />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  )
/*
  return (
    
    <div>
        <form> onSubmit={()=>alert("Favorito salvo")}
    <label> 
      Nome do site
    </label>
    <input name='nome_site'> </input>
    <label>
      URL
    </label>
   </form>
    </div>
  )

 linha 3 esta criando uma função com o nome conteudo.
 export = exponhe a funçãopara o resto do codigo; default= função padrão, so é possivel ter uma,
  que nesse caso é a função Conteudo */
}
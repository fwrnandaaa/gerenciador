import React from 'react'

export default function Conteudo() {

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
}
/* linha 3 esta criando uma função com o nome conteudo.
 export = exponhe a funçãopara o resto do codigo; default= função padrão, so é possivel ter uma,
  que nesse caso é a função Conteudo */
 
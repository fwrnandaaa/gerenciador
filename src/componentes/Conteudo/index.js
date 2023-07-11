import React from 'react'

export default function Conteudo() {
  return (
    <div>index</div>
  )
}
/* linha 3 esta criando uma função com o nome conteudo.
 export = exponhe a funçãopara o resto do codigo; default= função padrão, so é possivel ter uma,
  que nesse caso é a função Conteudo */
  export function OlaMundo(){
    console.log("Ola mundo")
  }
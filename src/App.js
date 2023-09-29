import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import Conteudo from "./componentes/Conteudo2";
//import Conteudo, { OlaMundo } from "./componentes/Conteudo";
import Rodape from "./componentes/Rodape";
import Estados from "./exemplos/Estados";


//HTML + js é chamado de Arquivo App JSX, pois é o JS extendido.
//Componente funcional é chamado assim pois é uma função. Ex: function App.
function App() {
  //Todo componente deve retornar um html entre parenteses.

  //um alert n pode ficar dentro do return, apenas se estiver entre chaves;
 // OlaMundo();
  return (
    // O react substitui ClassName ´por Class pois Class é palavra reservada do JS. Mas ambos significam a mesma coisa.
    //tudo que tiver dentro do return será mostrado pro cliente enquanto oq tiver fora é a parte funcional
//<> é um atalho para "div" e serve de elemento pai para os outros returns.
    <>

      {/* <Estados /> */}
      {/* <Cabecalho
        logo="logo192.png"
        titulo="REACT"
        subtitulo="O melhor gerenciador."
      /> */}
      {/* é usado a variavel titulo para dar um nome, pois ele pode ser usado diversas vezes. */}
      <Conteudo />
{/* 
      <Rodape logo="ifrnLogo.png" titulo="oi" Date="mostraData" /> */}
    </>
  );
}

export default App;

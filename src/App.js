import "./App.css";
import   Cadastro  from "./componentes/Cadastrousuario";
import Login from "./componentes/LoginUsuario";
import Cabecalho from "./componentes/Cabecalho";
import Conteudo from "./componentes/Conteudo2";
//import Conteudo, { OlaMundo } from "./componentes/Conteudo";
import Rodape from "./componentes/Rodape";
import Estados from "./exemplos/Estados";



function App() {
 
 // OlaMundo();
  return (
    
    <>

      {/* {<Estados />} */}
      <Cadastro/> 
    <Login/>
      {/* <Cabecalho
        logo="logo192.png"
        titulo="REACT"
        subtitulo="O melhor gerenciador."
    
      <Rodape logo="ifrnLogo.png" titulo="oi" Date="mostraData" /> */}
    </>
  );
}

export default App;

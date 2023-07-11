import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import Conteudo, {OlaMundo} from "./componentes/Conteudo";
import Rodape from "./componentes/Rodape";


//HTML + js é chamado de Arquivo App JSX, pois é o JS extendido.
//Componente funcional é chamado assim pois é uma função. Ex: function App.
function App() {
  //Todo componente deve retornar um html entre parenteses.
  OlaMundo();
  return (
    // O react substitui ClassName ´por Class pois Class é palavra reservada do JS. Mas ambos significam a mesma coisa.

    <>
    <Cabecalho logo ="logo192.png" titulo="fernanda" subtitulo = "um app querido"/>
    {/* é usado a variavel titulo para dar um nome, pois ele pode ser usado diversas vezes. */}
      <Conteudo/>
      
      <Rodape titulo = "testandooo"/>
      <Rodape/>
    </>
  
  );
}

export default App;

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Container/ItemListContainer';

const App = () => (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div> 
)

export default App;
/**
 * Existen dos formas de exportar componentes.
 * export default componente 
 *  permite que cuando se invoca solo se agrega el nombre del componente.
 * export componente 
 *  obliga agregar llaves cuando se invoque, ver ejemplo de TitleWidget al usar styles.
 */

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Container/ItemListContainer';
import Cart from './components/Cart';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => (
  <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route path="/category/:categoriaId">
          <ItemListContainer titulo={"Filtro Categoria"}/>
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
)

export default App;
/**
 * Existen dos formas de exportar componentes.
 * export default componente 
 *  permite que cuando se invoca solo se agrega el nombre del componente.
 * export componente 
 *  obliga agregar llaves cuando se invoque, ver ejemplo de TitleWidget al usar styles.
 */

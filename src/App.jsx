import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Container/ItemListContainer';
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
          <h1>Home</h1>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus earum, voluptatum nesciunt, commodi iste alias accusantium vel velit exercitationem labore quo, itaque at enim quas dolorum harum. Tenetur, aperiam.</div>
        </Route>
        <Route path="/about">
          <h1>La Covacha</h1>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus earum, voluptatum nesciunt, commodi iste alias accusantium vel velit exercitationem labore quo, itaque at enim quas dolorum harum. Tenetur, aperiam.</div>
        </Route>
        <Route path="/:categoriaId">
          <ItemListContainer />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
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

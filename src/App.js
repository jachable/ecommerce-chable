import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Bievenido invitado' />
    </div>
  );
}

export default App;

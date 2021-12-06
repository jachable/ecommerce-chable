import './../../assets/NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
    <nav>
      <CartWidget />
        <h2>Librería La Covacha</h2>
        <input id="toggle" type="checkbox" checked readOnly/>
        <ul>
            <li><a href="https://www.google.com/?a=1">Administración</a></li>
            <li><a href="https://www.google.com/?a=1">Finanzas</a></li>
            <li><a href="https://www.google.com/?a=1">Historia</a></li>
            <li><a href="https://www.google.com/?a=1">Niños</a></li>
            <li><a href="https://www.google.com/?a=2">Novelas</a></li>
            <li><a href="https://www.google.com/?a=3">Superación Personal</a></li>
        </ul>
    </nav>
    )
}
export default NavBar;
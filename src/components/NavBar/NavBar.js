import './../../assets/NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div className="wrap">
            <CartWidget />
            <div style={{fontWeight:"bold", fontSize:"1.5em", display:"inline-block"}}>Librería La Covacha</div>
            
            <nav>
                <ul className="primary">
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/?a=1">Administración</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/?a=1">Finanzas</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/?a=1">Historia</a></li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/?a=1">Niños</a>
                        <ul className="sub">
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/?a=1">Fantasía</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/?a=1">Aventura</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/?a=1">Animales</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/?a=1">Magia</a></li>
                        </ul>
                    </li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/?a=2">Novelas</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/?a=3">Superación Personal</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar;
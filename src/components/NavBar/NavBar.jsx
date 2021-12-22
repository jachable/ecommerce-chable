import './../../assets/css/NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import TitleWidget from '../TitleWidget/index';
import Link from '../Link/index';

const NavBar = () => {
    return (
        <div className="wrap">
            <CartWidget />
            <TitleWidget />
            <nav>
                <ul className="primary">
                    <Link ruta='/' nombre='Home' />
                    <Link ruta='/' nombre='Colecciones' />
                    <Link ruta='/' nombre='Clásicos' />
                    <Link ruta='/' nombre='Contacto' />
                </ul>
            </nav>
        </div>
    )
}
export default NavBar;
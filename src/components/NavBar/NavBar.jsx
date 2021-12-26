import './../../assets/css/NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import TitleWidget from '../TitleWidget/index';
import Enlace from '../Enlace/index';

const NavBar = () => {
    return (
        <div className="wrap">
            <CartWidget />
            <TitleWidget />
            <nav>
                <ul className="primary">
                    <Enlace />
                </ul>
            </nav>
        </div>
    )
}
export default NavBar;
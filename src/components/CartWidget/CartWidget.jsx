import logo from './../../assets/img/cartshop1.png';
import { Link } from "react-router-dom";

const CartWidget = () => (
        <Link to={"/cart"}>
            <img src={logo} className="App-logo" style={{height:'10vmin'}} alt="logo marca" />
        </Link>
    )
export default CartWidget;
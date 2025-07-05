import {Link} from "react-router-dom";
// import warning from "./assets/warning.svg";
import "../navbar/Navbar.css";
// import cartIcon from "./assets/cartIcon.svg";
import { CartState } from "../context/Context";
import warning from "../assets/warning.svg"; // ✅
import cartIcon from "../assets/cartIcon.svg"; // ✅

import SideBar from "../SideMenu/SideBar";

function Navbar(){

    const {state: { cart }}= CartState()
    

    return(<>
        <div className="nav-top-headlines">
            <img src={warning} alt="" className="warning-svg"/>
            <p className="nav-top-paragraph">Free delivery all over Pakistan</p>

        </div>

        <nav className="Nav-bar">
            <div className="nav-bar-content">

                {/* <img src={menu} alt="" className="ham-burger" /> */}
                <SideBar/>
            
                <img src="logo.jpg" className="logo" alt="" />

                <ul>
                    
                    <li> <Link to={"./Home"} className="navlink">Home</Link> </li>
                    <li> <Link to={"./Polo"} className="navlink">Polo</Link> </li>
                    <li> <Link to={"./Shop"} className="navlink">Shop</Link> </li>
                    <li> <Link to={"./Contact"} className="navlink">Contact</Link> </li>
                    {/* <li><Link to={"./SideCart"}> <img src={cartIcon} alt="" /></Link> <p className="cart-length">{cart.length}</p> </li> */}
                </ul>
                    <div className="cart-details">
                    <Link to={"./SideCart"}> <img src={cartIcon} alt="" /></Link>
                    <p className="cart-length">{cart.length}</p>
                    </div>
        

            </div>

        </nav>


    
    </>);

}

export default Navbar;
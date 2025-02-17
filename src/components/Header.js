import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
    const [btnName, setbtnName] = useState("Login");

    return (
        <header className='header'>
            <div className='logo-container'>
                <img src={LOGO_URL} alt='logo' />
            </div>
            <nav className='nav'>
                <ul>
                    <li>Home</li>
                    <li>Restuarants</li>
                    <li>Order</li>
                    <li>cart</li>
                   { <li><button onClick={()=> {
                        btnName === "Login"
                        ? setbtnName("Logout")
                        : setbtnName("Login");
                    }} className="login-btn">{btnName}</button></li> }
                </ul>
            </nav>
        </header>
    )
}

export default Header;
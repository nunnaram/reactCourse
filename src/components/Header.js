import { LOGO_URL } from "../utils/constants";
const Header = () => {
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
                </ul>
            </nav>
        </header>
    )
}

export default Header;
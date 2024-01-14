import Navbar from './Navbar';
import headerPic from './media/headerTmp.jpg'

const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <a href="/" className="logo">
                    SimSnake
                </a>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
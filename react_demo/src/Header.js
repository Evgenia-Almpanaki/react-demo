import MainMenu from "./Shared";
import "./Home.css";
import logo from "./assets/images/logo.png";

const Header = () => {
    return (
        <nav className="d-flex flex-row w-100 justify-content-between navbar navbar-expand navbar-dark bg-dark header">
            <div className="p-2">
                <img src={logo} width={70} alt="logo" className="px-1" />
                Movie Reviews
            </div>

            <div>
                <MainMenu/>
            </div>
        </nav>
    );
};

export default Header;

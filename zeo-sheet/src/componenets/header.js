import "../styleSheets/header.css";

//images
import logo from "../assets/logo.png";

const Header = (props) => {
    const handleAboutClick = () => {
        window.location.href = "https://github.com/Nithesh24/ZeoSheet";
    };

    return (
        <div className="main-flex">
            <div className="row-1">
                <div className="row-1-col-1">
                    <img src={logo} alt={props.logoAlt} />
                </div>
                <div className="row-1-col-2">
                    <div className="row-1-col-2-row-1">Zeo Sheet</div>
                    <div className="row-1-col-2-row-2">
                        <p>Welcome to ZeoSheet, your personal Google Sheets alternative!</p>
                        <button className="btn" onClick={handleAboutClick}>About</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Header.defaultProps = {
    logoSrc: logo,
    logoAlt: "logo"
}
export default Header;
import "../styleSheets/header.css";

//images
import logo from "../assets/zeoTapLogo.png";

const Header = (props) =>{
    return(
        <div className = "main-flex">
            <div className = "row-1">
                <div className = "row-1-col-1">
                    <img src = {logo} alt = {props.logoAlt} />
                </div>
                <div className = "row-1-col-2">
                    <div className = "row-1-col-2-row-1">File Name</div>
                    <div className = "row-1-col-2-row-2">
                        <button className = "btn">Some Option</button>
                    </div>
                </div>
            </div>
            <div className = "row-2">
                <button className = "btn">Some Option</button>
                <button className = "btn">Some Option</button>
            </div>
        </div>
    );
}

Header.defaultProps = {
    logoSrc : logo,
    logoAlt : "logo"
}
export default Header;
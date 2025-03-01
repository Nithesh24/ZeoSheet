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
                        <button className = "btn">File</button>
                        <button className = "btn">Edit</button>
                        <button className = "btn">View</button>
                        <button className = "btn">Tools</button>
                        <button className = "btn">Help</button>
                        <button className = "btn">About</button>
                    </div>
                </div>
            </div>
            <div className = "row-2">
                <button className = "btn">Search</button>
                <button className = "btn">Undo</button>
                <button className = "btn">Redo</button>
                <button className = "btn">Print</button>
                <button className = "btn">Zoom</button>
                <button className = "btn">Math  tools</button>
            </div>
        </div>
    );
}

Header.defaultProps = {
    logoSrc : logo,
    logoAlt : "logo"
}
export default Header;
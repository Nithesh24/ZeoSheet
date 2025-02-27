import SpreadSheet from "./spreadSheet";
import Header from "./header";

const Main = (props) => {
    return (
        <div className = "main-flex">
            <Header />
            <SpreadSheet />
        </div>
    );
}

export default Main;
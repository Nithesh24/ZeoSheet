import SpreadSheet from "./spreadSheet";
import Header from "./header";

import { registerAllModules } from 'handsontable/registry'; 
registerAllModules();

const Main = (props) => {
    return (
        <div className = "main-flex">
            <Header />
            <SpreadSheet />
        </div>
    );
}

export default Main;
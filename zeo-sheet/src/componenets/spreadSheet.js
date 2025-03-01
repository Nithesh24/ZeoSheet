import '../styleSheets/spreadSheet.css';
import { HotTable } from '@handsontable/react-wrapper';
import 'handsontable/dist/handsontable.full.min.css';
import { registerAllModules } from 'handsontable/registry'; 


const generateData = () => {
    const rows = 100;
    const cols = 100; // 'A' to 'Z'
    const data = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push('');
        }
        data.push(row);
    }

    return data;
};

const SpreadSheet = (props) => {
    const data = generateData();

    return (
        <div className="spread-sheet-flex">
            <HotTable
                data={data}
                colHeaders={true}
                rowHeaders={true}
                width="100%"
                height="100%"
                licenseKey="non-commercial-and-evaluation"
                manualColumnResize={true} // Enable manual column resize
                manualRowResize={true} // Enable manual row resize
            />
        </div>
    );
}

export default SpreadSheet;
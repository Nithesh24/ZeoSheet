import { HotTable } from '@handsontable/react-wrapper';

const SpreadSheet = (props) =>{
    return (
        <div className="spread-sheet-flex ht-theme-main-dark-auto">
            <HotTable
                data={[
                ['Tesla', 'Volvo', 'Toyota', 'Ford'],
                ['2019', 10, 11, 12, 13],
                ['2020', 20, 11, 14, 13],
                ['2021', 30, 15, 12, 13]
                ]}
                rowHeaders={true}
                colHeaders={true}
                height="auto"
                autoWrapRow={true}
                autoWrapCol={true}
                licenseKey="non-commercial-and-evaluation" // for non-commercial use only
            />
        </div>
    );
}

export default SpreadSheet;
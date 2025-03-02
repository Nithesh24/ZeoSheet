import '../styleSheets/spreadSheet.css';
import { HotTable } from '@handsontable/react-wrapper';
import 'handsontable/dist/handsontable.full.min.css';
import { registerAllModules } from 'handsontable/registry'; 
import { useCallback, useRef } from 'react';

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

const getSelection = (hotRef, event)=>{
    event.preventDefault(); // Prevent default behavior to avoid deselection
    const hot = hotRef.current.hotInstance;
    const selection = hot.getSelected(); // Get selected cell range
    return selection;
}

const makeBold = (hotRef) => (event) => {
    let selected = getSelection(hotRef, event);

    if (selected) {
        const hot = hotRef.current.hotInstance;
        selected.forEach(([startRow, startCol, endRow, endCol]) => {
            for (let row = startRow; row <= endRow; row++) {
                for (let col = startCol; col <= endCol; col++) {
                    const currentClassName = hot.getCellMeta(row, col).className;
                    if (currentClassName && currentClassName.includes('bold')) {
                        hot.setCellMeta(row, col, 'className', currentClassName.replace('bold', '').trim());
                    } else {
                        hot.setCellMeta(row, col, 'className', (currentClassName ? currentClassName + ' ' : '') + 'bold');
                    }
                }
            }
        });
        hot.render(); // Re-render the table to apply the changes
        // Reapply the selection
        setTimeout(() => {
            hot.selectCells(selected);
        }, 0);
    }
}

const makeItalic = (hotRef) => (event) => {
    let selected = getSelection(hotRef, event);

    if (selected) {
        const hot = hotRef.current.hotInstance;
        selected.forEach(([startRow, startCol, endRow, endCol]) => {
            for (let row = startRow; row <= endRow; row++) {
                for (let col = startCol; col <= endCol; col++) {
                    const currentClassName = hot.getCellMeta(row, col).className;
                    if (currentClassName && currentClassName.includes('italic')) {
                        hot.setCellMeta(row, col, 'className', currentClassName.replace('italic', '').trim());
                    } else {
                        hot.setCellMeta(row, col, 'className', (currentClassName ? currentClassName + ' ' : '') + 'italic');
                    }
                }
            }
        });
        hot.render(); // Re-render the table to apply the changes
        // Reapply the selection
        setTimeout(() => {
            hot.selectCells(selected);
        }, 0);
    }
};

const increaseFontSize = (hotRef) => (event) => {
    let selected = getSelection(hotRef, event);

    if (selected) {
        const hot = hotRef.current.hotInstance;
        selected.forEach(([startRow, startCol, endRow, endCol]) => {
            for (let row = startRow; row <= endRow; row++) {
                for (let col = startCol; col <= endCol; col++) {
                    const currentClassName = hot.getCellMeta(row, col).className || '';
                    if (currentClassName.includes('font-size-10')) {
                        hot.setCellMeta(row, col, 'className', currentClassName.replace('font-size-10', 'font-size-14').trim());
                    } else if (currentClassName.includes('font-size-14')) {
                        hot.setCellMeta(row, col, 'className', currentClassName.replace('font-size-14', 'font-size-18').trim());
                    } else if (currentClassName.includes('font-size-18')) {
                        hot.setCellMeta(row, col, 'className', currentClassName.replace('font-size-18', 'font-size-22').trim());
                    } else if (currentClassName.includes('font-size-22')) {
                        hot.setCellMeta(row, col, 'className', currentClassName.replace('font-size-22', 'font-size-26').trim());
                    } else if (currentClassName.includes('font-size-26')) {
                        hot.setCellMeta(row, col, 'className', currentClassName.replace('font-size-26', 'font-size-32').trim());
                    } else if(!currentClassName.includes('font-size-32')){
                        hot.setCellMeta(row, col, 'className', (currentClassName ? currentClassName + ' ' : '') + 'font-size-18');
                    }
                }
            }
        });
        hot.render(); // Re-render the table to apply the changes
        // Reapply the selection
        setTimeout(() => {
            hot.selectCells(selected);
        }, 0);
    }
};

const decreaseFontSize = (hotRef) => (event) => {
    let selected = getSelection(hotRef, event);

    if (selected) {
        const hot = hotRef.current.hotInstance;
        selected.forEach(([startRow, startCol, endRow, endCol]) => {
            for (let row = startRow; row <= endRow; row++) {
                for (let col = startCol; col <= endCol; col++) {
                    const currentClassName = hot.getCellMeta(row, col).className || '';
                    if (currentClassName.includes('font-size-32')) {
                        hot.setCellMeta(row, col, 'className', currentClassName.replace('font-size-32', 'font-size-26').trim());
                    } else if (currentClassName.includes('font-size-26')) {
                        hot.setCellMeta(row, col, 'className', currentClassName.replace('font-size-26', 'font-size-22').trim());
                    } else if (currentClassName.includes('font-size-22')) {
                        hot.setCellMeta(row, col, 'className', currentClassName.replace('font-size-22', 'font-size-18').trim());
                    } else if (currentClassName.includes('font-size-18')) {
                        hot.setCellMeta(row, col, 'className', currentClassName.replace('font-size-18', 'font-size-14').trim());
                    } else if (currentClassName.includes('font-size-14')) {
                        hot.setCellMeta(row, col, 'className', currentClassName.replace('font-size-14', 'font-size-10').trim());
                    } else if(!currentClassName.includes('font-size-10')){
                        hot.setCellMeta(row, col, 'className', (currentClassName ? currentClassName + ' ' : '') + 'font-size-10');
                    }
                }
            }
        });
        hot.render(); // Re-render the table to apply the changes
        // Reapply the selection
        setTimeout(() => {
            hot.selectCells(selected);
        }, 0);
    }
};

const SpreadSheet = (props) => {
    const data = generateData();
    const hotRef = useRef(null);

    return (
        <div className="spread-sheet-flex">
            <div className = "tool-bar">
                <button className = "btn">Search</button>
                <button className = "btn">Undo</button>
                <button className = "btn">Redo</button>
                <button className = "btn" onMouseDown={makeBold(hotRef)}>Bold</button>
                <button className = "btn" onMouseDown={makeItalic(hotRef)}>Italic</button>
                <button className="btn" onMouseDown={increaseFontSize(hotRef)}>Increase Font Size</button>
                <button className="btn" onMouseDown={decreaseFontSize(hotRef)}>Decrease Font Size</button>
                <button className = "btn">Print</button>
                <button className = "btn">Zoom</button>
                <button className = "btn">Math  tools</button>
            </div>


            <HotTable
                ref={hotRef}
                data={data}
                colHeaders={true}
                rowHeaders={true}
                width="100%"
                height="100%"
                licenseKey="non-commercial-and-evaluation"
                manualColumnResize={true} // Enable manual column resize
                manualRowResize={true} // Enable manual row resize
                contextMenu={true} // Enable context menu
            />
        </div>
    );
}

export default SpreadSheet;
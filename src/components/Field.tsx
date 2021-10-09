import  { useEffect, useState } from "react";
import Cell from "./Cell";
import "./Field.css";
import React from "react";

type FieldSize = {
    width: number,
    height: number
}

export enum CellType  {
    DEAD = "dead",
    ALIVE = "alive",
    OLD = "old"
}


function Field(props: FieldSize) {
    const [cellsState, setSellsState] = useState(Array<Array<CellType>>());

    const updateCellState = (rowId: number, cellId: number, cellType: CellType) => {
        let arr = [...cellsState];
        arr[rowId][cellId] = cellType;
        setSellsState(arr);
    };

    useEffect(() => {
        const generateCells = (size) => {
            let initialCells: CellType[][] = [];
            for (let rowIdx = 0; rowIdx < size.height; rowIdx++) {
                initialCells[rowIdx] = [];
                for(let cellIdx = 0; cellIdx < size.width; cellIdx++) {
                    initialCells[rowIdx][cellIdx] = CellType.DEAD;
                }
            }
        
            setSellsState(initialCells);
        };

        generateCells(props);
    }, [props]);

    return (
        <div className='field'>
            {cellsState.map((row, rowIndex) => {
                return (
                    <div className="field-row" key={'row-' + rowIndex}>
                        { row.map((cell, cellIndex) => {
                            return <Cell id='cell' type={cell} 
                            onSelect={() => updateCellState(rowIndex, cellIndex, CellType.ALIVE)} 
                            key={'cell-' + cellIndex}></Cell>
                        })}
                    </div>
                )})} 
        </div>
    ) 

}
export default Field;
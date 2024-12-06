import { useState } from "react";
import Cell from "./Cell.jsx"
import "./MineField.css"


export default function MineField({rowCount,columnCount,mineCount,gameState}){
    const GRID = generateGrid();
    const MINES = generateMines();
    function randomCell(){
        const row = Math.floor(Math.random()*rowCount);
        const column = Math.floor(Math.random()*columnCount)
        return {
            row: row,
            column: column,
        }
    }
    function hasMine(minesArray,evaluatingCell){
        return (
            minesArray.filter(cell => 
                (evaluatingCell.row===cell.row && evaluatingCell.column===cell.column)
            ).length > 0
        );
    }
    function generateMines(){
        let minesArray = [];
        do{
            let mineCell = randomCell();
            if (!hasMine(minesArray,mineCell))
            {
                minesArray.push(mineCell);
            }
        }while(minesArray.length<mineCount);
        return minesArray;
    }
    function generateGrid(){
        let resultingGrid = [];
        for(let row = 0; row<rowCount; row++)
        {
            let tempRow = [];
            for(let column = 0; column<columnCount; column++){
                tempRow.push(<Cell gameState={gameState} key={`cell-${row}${column}`} row={row} column={column} verifyCell={(evaluatingCell)=>hasMine(MINES,evaluatingCell)}/>);
            }
            resultingGrid.push(tempRow);
        }
        return resultingGrid;
    }

    return(
        <div id="mine-field" style={{
            gridTemplateRows: `repeat(${rowCount},1fr)`,
            gridTemplateColumns: `repeat(${columnCount},1fr)`
        }}>
            {GRID.map(row=>row.map(cell=>cell))}
        </div>
    );
}
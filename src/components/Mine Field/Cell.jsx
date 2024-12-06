import { useState } from "react";
import "./Cell.css"

export default function Cell({gameState,row,column,verifyCell: hasMine}){
    const [isRevealed,setIsRevealed] = useState(false);
    const [isBoom,setIsBoom] = useState(false);
    const thisCell = {
        row: row, 
        column: column
    }
    if(gameState==0 && isRevealed){
        hideCell();
    }
    function clickHandler(){
        setIsBoom(hasMine(thisCell));
        revealCell();
    }
    function revealCell(){
        setIsRevealed(true);
    }
    function hideCell(){
        setIsRevealed(false);
    }
    return (
        <button disabled={gameState==0} className={`cell ${isRevealed? "revealed":null} ${isBoom? "boom":null}`} onClick={()=>clickHandler()}></button>
    );
}
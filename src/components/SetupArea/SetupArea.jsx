import { useState } from "react"
import "./SetupArea.css"

export default function SetupArea({setGame,resetGame,gameState}){
    const [minesControl,setMinesControl] = useState(8);
    const [currency,setCurrency] = useState(1)
    const MIN = 4;
    const MAX = 16;
    return(
        <div id="setup-area">
            <div id="mines-setup">
                <h2 className="field-name">Mines <span className="medium">{minesControl}</span></h2>
                <input type="range" name="mine-control" id="mine-slider" className="medium" value={minesControl} min={MIN} max={MAX} onChange={(event)=>setMinesControl(event.target.value)}/>
            </div>
            <div id="currency-setup">
                <h2 className="field-name">Currency</h2>
                <input type="number" name="currency-control" id="currency-input" value={currency} onChange={(e)=>setCurrency(parseInt(e.target.value))}/>
            </div>
            {gameState == 0? <button id="start-game" onClick={()=>setGame(minesControl,currency)}>START</button> : 
                <button id="reset-game" onClick={()=>resetGame()}>STOP</button>
            }
        </div>
    )
}
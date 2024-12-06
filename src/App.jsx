import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MineField from './components/Mine Field/MineField'
import SetupArea from './components/SetupArea/SetupArea';

function App() {
  const SIZE = 5;
  const [game,setGame] = useState({
    mines: 0,
    currency: 0,
    state: 0
  });
  return (
    <>
      <Header>Mine Field</Header>
      <MineField rowCount={SIZE} columnCount={SIZE} mineCount={game.mines} gameState={game.state}/>
      <SetupArea setGame={(mines,currency)=>{
        setGame({
            mines: mines,
            currency: currency,
            state: 1
          });
        }}
      resetGame = {()=>{
        setGame({
          mines: 0,
          currency: 0,
          state: 0
        });
      }}
      gameState={game.state}
      ></SetupArea>
    </>
  )
}

export default App

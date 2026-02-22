import { useState } from "react";
import { FIRST_VISIT, INGAME, GAME_OVER } from "./script";
import WelcomeSreen from "./components/WelcomeScreen";
import GameScreen from "./components/GameScreen";
import ResultScreen from "./components/ResultScreen";


function App() {
  const [gameStatus, setGameStatus] = useState(FIRST_VISIT);

  function endGame() {
    setGameStatus(GAME_OVER);
  }

  function startGame() {
    setGameStatus(INGAME);
  }

  return (
    <>
      {gameStatus == FIRST_VISIT && <WelcomeSreen startGame={startGame}/>}
      {gameStatus == INGAME && <GameScreen endGame={endGame} />}
      {gameStatus==GAME_OVER && <ResultScreen startGame={startGame} /> }
    </>
  )
}

export default App

import { useState } from "react";
import WelcomeSreen from "./components/WelcomeScreen";
import GameScreen from "./components/GameScreen";

function App() {
  const [isStarted, setIsStarted] = useState(false);

  // const irgendwas= "irgendwas" ///DEBUG

  function startQuiz() {
    console.log("startQuiz");
    setIsStarted(true);
  }

  return (
    isStarted ? <GameScreen /> : <WelcomeSreen startGame={startQuiz}/>
    // isStarted ? <GameScreen /> : <WelcomeSreen startGame={irgendwas}/>
  )
}

export default App

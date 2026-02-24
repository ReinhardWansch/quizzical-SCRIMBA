import { useState } from "react";
import WelcomeSreen from "./components/WelcomeScreen";
import GameScreen from "./components/GameScreen";

function App() {
  const [isStarted, setIsStarted] = useState(false);

  function startQuiz() {
    setIsStarted(true);
  }

  return (
    isStarted ? <GameScreen /> : <WelcomeSreen />
  )
}

export default App

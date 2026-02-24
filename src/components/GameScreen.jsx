import {useState} from "react"

export default function GameScreen() {
    const [questions, setQuestions]= useState([]);


    return (
        <div>
            <h1>GameScreen</h1>
            <button>checkAnswers</button>
        </div>
    )
}
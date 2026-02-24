
export default function WelcomeSreen({startGame}) {
    return (
        <div>
            <h1>Quizzical</h1>
            <button onClick={startGame}>Start quiz</button>
        </div>
    )
}
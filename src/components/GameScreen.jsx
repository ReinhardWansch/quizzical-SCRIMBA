
export default function GameScreen({endGame}) {
    return (
        <div>
            <h1>GameScreen</h1>
            <button onClick={endGame}>end game</button>
        </div>
    )
}
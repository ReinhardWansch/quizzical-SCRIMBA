
export default function ResultScreen({startGame}) {
    return (
        <div>
            <h1>Results</h1>
            <button onClick={startGame}>Play again</button>
        </div>
    )
}
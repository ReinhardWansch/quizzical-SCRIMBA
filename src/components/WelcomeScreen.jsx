
export default function WelcomeSreen(props) {
    // console.log(props.startGame); ///DEBUG

    return (
        <div>
            <h1>Quizzical</h1>
            <button onClick={() => props.startGame()}>Start quiz</button>
        </div>
    )
}
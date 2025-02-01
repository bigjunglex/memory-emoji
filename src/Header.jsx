const ChangeCardsBtn = ({getcards}) => {
    return (
        <button className="newcards" onClick={getcards}> New Cards </button>
    )
}

const Header = ({ score, bestScore, onClick }) => {
    return (
        <header>
            <div>
                <p className="score">Score : { score } </p>
                <p className="bestScore">Best Score : { bestScore }</p>     
            </div>
            <ChangeCardsBtn getcards={onClick}/>
        </header>
    )
}



export { Header }

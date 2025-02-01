
const Card = ({ card , click }) => {
    const clickHandler = () => click(card)
    return (
        <div className="card" onClick={clickHandler}><h1>{card[0]}</h1></div>
    )
}

const Board = ({ cards, clickController }) => {
    return (
        <div className="board">
            {cards.map(card => <Card key={card[0]} card={card} click={clickController}/>)}
        </div>
    )
}



export { Board }
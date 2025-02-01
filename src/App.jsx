import { useState, useEffect } from "react"
import { Header } from "./Header.jsx"
import { Board } from "./Game.jsx"
import { Loading } from "./Loading.jsx"
import { randomize, getData } from "./utility.js"
import { PropTypes } from 'prop-types'


const App = () => {
    const [cards, setCards] = useState([])
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [base, setBase] = useState([])
    const [isReady, setIsReady] = useState(false)

    useEffect(() =>{
        getData(20).then(res => {
            setCards(res)
            setBase(res)
        }).then(() => setIsReady(true))
    }, [])

    const handleClick = (card) => {
        const indexOfCard = cards.findIndex(x => x[0] === card[0])
        const newCards = randomize(cards.map((el, i) => {
            return i === indexOfCard ? [el[0], true] : el
        }))

        if (!card[1]){
            setScore(score + 1)
            setCards(newCards)
        } else {
            if (score > bestScore) setBestScore(score)  
            setScore(0)
        setCards(randomize(base))
        }
    }

    return (
        <>
            <Header score={score} bestScore={bestScore} />
            {isReady ? <Board cards={cards} clickController={handleClick} /> : <Loading />}
        </>
    )
}


Header.propTypes = {
    score: PropTypes.number,
    bestScore: PropTypes.number,
}



export { App }
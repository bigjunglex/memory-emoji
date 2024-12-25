import { useState, useEffect } from "react"
import { Header } from "./Header.jsx"
import { Board } from "./Game.jsx"
import { randomize, getData } from "./utility.js"



const App = () => {
    const [cards, setCards] = useState([])
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    useEffect(() =>{
        getData().then(res => {
            setCards(res)
        })
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
            setCards(data)
        }
    }



    return (
        <>
            <Header score={score} bestScore={bestScore} />
            <Board cards={cards} clickController={handleClick} />
        </>
    )
}


export { App }
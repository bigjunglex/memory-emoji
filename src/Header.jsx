const Header = ({ score, bestScore }) => {
    return (
        <header>
            <p className="score">Score : { score } </p>
            <p className="bestScore">Best Score : { bestScore }</p>
        </header>
    )
}



export { Header }

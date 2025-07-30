export default function Randos({ randoWords }) {
    console.log(randoWords);
    return (
        <div className="container divider">
            <div id="randos">
                <h2 className="firstQ_header">This Week's Random Words:</h2>
                <>
                    {randoWords.map((word) => {
                        let wordID = randoWords.indexOf(word) + 1;
                        return (
                            <div className="rando_word" key={wordID}>
                                <img
                                    src={`./img/${wordID}-white.svg`}
                                    alt={wordID}
                                />
                                <h2>{word}</h2>
                            </div>
                        );
                    })}
                </>
            </div>
        </div>
    );
}

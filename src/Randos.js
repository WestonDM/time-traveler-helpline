export default function Randos({ randoWords }) {
    return (
        <div className="container divider">
            <div id="randos">
                <h2 className="h1 firstQ_header">This Week's Random Words</h2>
                <>
                    {randoWords.map((word) => (
                        <div className="rando_word" key={word.id}>
                            <img src={`./img/${word.id}.svg`} alt={word.id} />
                            <h2>{word.word}</h2>
                        </div>
                    ))}
                </>
            </div>
        </div>
    );
}

export default function Randos({ randoWords }) {
    return (
        <div className="container divider">
            <div id="randos">
                <h2 className="h1 firstQ_header">This Week's Random Words</h2>
                <>
                    <div className="rando_word">
                        <img src="./img/1.svg" alt="1" />
                        <h2>Door</h2>
                    </div>
                    <div className="rando_word">
                        <img src="./img/2.svg" alt="2" />
                        <h2>Earth</h2>
                    </div>
                    <div className="rando_word">
                        <img src="./img/3.svg" alt="3" />
                        <h2>Horse</h2>
                    </div>
                </>
            </div>
        </div>
    );
}

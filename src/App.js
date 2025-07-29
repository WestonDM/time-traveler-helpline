import "./App.css";
import Header from "./Header";
import Contact from "./Contact";
import FirstQs from "./FirstQs";
import Instructions from "./Instructions";
import Randos from "./Randos";
import Footer from "./Footer";
import wordList from "./wordlist.json";

let wordGrp = [];

function App() {
    function generateRandomNumbersArray() {
        const randomNumbers = [];

        for (let i = 0; i < 3; i++) {
            const randomNumber = Math.floor(Math.random() * (674 - 0 + 1)) + 0;

            randomNumbers.push(randomNumber);
        }

        return randomNumbers;
    }

    const resultArray = generateRandomNumbersArray();

    const randoWords = [];
    for (let i = 0; i < 3; i++) {
        randoWords[i] = { id: i + 1, word: wordList.words[resultArray[i]] };
    }

    return (
        <div className="App main">
            <Header />
            <FirstQs />
            <Instructions />
            <Randos randoWords={randoWords} />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

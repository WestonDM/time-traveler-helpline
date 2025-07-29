import "./App.css";
import Header from "./Header";
import Contact from "./Contact";
import FirstQs from "./FirstQs";
import Instructions from "./Instructions";
import Randos from "./Randos";
import Footer from "./Footer";

function App() {
    const randoWords = [
        { id: 1, word: "Door" },
        { id: 2, word: "Earth" },
        { id: 3, word: "Horse" },
    ];

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

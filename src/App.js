import "./App.css";
import Header from "./Header";
import Contact from "./Contact";
import FirstQs from "./FirstQs";
import Instructions from "./Instructions";
import Footer from "./Footer";

function App() {
    return (
        <div className="App main">
            <Header />
            <FirstQs />
            <Instructions />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

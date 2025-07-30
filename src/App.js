import React from "react";
import "./App.css";
import Header from "./Header";
import Contact from "./Contact";
import FirstQs from "./FirstQs";
import Instructions from "./Instructions";
import Randos from "./Randos";
import Footer from "./Footer";
import words from "./wordlist.json";

const startDate = new Date("2025-07-30");

function getCurrentWeekNumber() {
    const now = new Date();
    const msInWeek = 7 * 24 * 60 * 60 * 1000;
    const diff = now - startDate;
    return Math.floor(diff / msInWeek);
}

function getWeeklyWords(wordList, wordsPerWeek = 3) {
    const week = getCurrentWeekNumber();
    const startIndex = week * wordsPerWeek;
    return wordList.slice(startIndex, startIndex + wordsPerWeek);
}

function App() {
    const randoWords = getWeeklyWords(words.words);
    return (
        <>
            <div className="container">
                <div className="App main">
                    <Header />
                    <FirstQs />
                    <Instructions />
                    <Randos randoWords={randoWords} />
                    <Contact />
                </div>
            </div>
            <div className="container" id="footer-container">
                <Footer />
            </div>
        </>
    );
}

export default App;

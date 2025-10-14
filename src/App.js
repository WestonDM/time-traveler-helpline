import React from "react";
import "./App.css";
import Header from "./Header";
import Contact from "./Contact";
import FirstQs from "./FirstQs";
import Instructions from "./Instructions";
import Randos from "./Randos";
import Footer from "./Footer";
import encryptedWordlist from "./wordlist-new.encrypted.json";
import { decryptWordlist } from "./encryptionUtils";

const startDate = new Date("2025-10-14");

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
    // Decrypt the wordlist
    const decryptedWordlist = decryptWordlist(encryptedWordlist.encrypted);

    // Fallback to empty array if decryption fails
    const words = decryptedWordlist ? decryptedWordlist.words : [];

    const randoWords = getWeeklyWords(words);
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

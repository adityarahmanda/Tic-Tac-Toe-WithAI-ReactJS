import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Game from "./components/Game";
import MainMenu from "./components/MainMenu";
import NavMenu from "./components/NavMenu";
import Settings from "./components/Settings";
import "./index.css";

export const playmodes = {
    WITH_AI: "With AI",
    WITH_FRIEND: "With Friend"
}

export const difficulties = {
    EASY: "Stupid",
    MEDIUM: "Normal",
    HARD: "Unbeatable"
}

const App = () => {
    const [playmode, setPlaymode] = useState(playmodes.WITH_AI);
    const [difficulty, setDifficulty] = useState(difficulties.MEDIUM);
    const [gameStarted, setGameStarted] = useState(false); 

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isRestart, setIsRestart] = useState(false);

    function backToMainMenu() {
        if(gameStarted) {
            setGameStarted(false);
            if(isMenuOpen) setIsMenuOpen(false);
        } 
    }

    function startGame(playmode) {
        setPlaymode(playmode);
        setGameStarted(true);
        if(isMenuOpen) setIsMenuOpen(false);
    }

    function changeDifficulty(difficulty) {
        if(gameStarted && playmode === playmodes.WITH_AI) {
            setIsRestart(true);
        }
        setDifficulty(difficulty);
    }
    
    function changePlaymode(playmode) {
        if(!gameStarted) {
            setPlaymode(playmode);
            setGameStarted(true);
        } else {
            setPlaymode(playmode);
            setIsRestart(true);
        }
    }

    useEffect(() => {
        if(isRestart) {
           setIsRestart(false);
        }
    }, [isRestart]);

    return (
    <>
        <header id="header">
            <div className="hamburger-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} >
                <div className={isMenuOpen ? "hamburger-menu open" : "hamburger-menu"} /> 
            </div>
            <div id="navbar" className={!isMenuOpen && "close"}>
                <NavMenu value={playmode} gameStatus={gameStarted} onClick={playmode => changePlaymode(playmode)} />
                <Settings value={difficulty} onClick={difficulty => changeDifficulty(difficulty)} />
            </div>
            <h1 className="title centered" onClick={() => backToMainMenu()}>tictactoe</h1>
        </header>
        <main id="main-wrapper">
            <div className="game-wrapper">
            { gameStarted ? <Game playmode={playmode} difficulty={difficulty} isRestart={isRestart}/> : <MainMenu onClick={playmode => startGame(playmode)} /> } 
            </div>
        </main>
        { !gameStarted && <footer id="footer" className="centered">@2020 - <a href="https://adityarahmanda.nasihosting.com">Aditya Rahmanda</a></footer> }
    </>
    );
}

ReactDOM.render(<App />, document.getElementById("outer-wrapper"));

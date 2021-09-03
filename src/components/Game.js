import React, {useState, useEffect, useCallback, useMemo} from "react";
import { playmodes } from "../index";
import * as Helper from "../helper";
import Board from "./game/Board";
import Notification from "./game/Notification";
import { RiRestartFill } from "react-icons/ri";

const Game = ({isRestart, playmode, difficulty}) => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const [swapTurn, setSwapTurn] = useState(true);
    
    const [AIDoMove, setAIDoMove] = useState(false);
    const [AITurnFirst, setAITurnFirst] = useState(false);
    const [AIMove, setAIMove] = useState(false);
    
    const [roundEnded, setRoundEnded] = useState(false);
    const [scores, setScore] = useState(Array(2).fill(0));
    const [winLines, setWinLines] = useState(Array(3).fill(null));

    const [showNotification, setShowNotification] = useState(false);
    const [notificationText, setNotificationText] = useState(" ");

    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = useMemo(squares => [...current], [current]);

    const xo = xIsNext ? 'x' : 'o';

    function setNotification(text, time){
      setNotificationText(text);
      setShowNotification(true);
      
      setTimeout(function() {
        setShowNotification(false);
      }, time);
    }

    const startNewRound = useCallback(() => {
      setTimeout(function() {
        setXIsNext(!swapTurn);
        setSwapTurn(!swapTurn);
        setStepNumber(0);
        setRoundEnded(false);
        setWinLines(Array(3).fill(null));

        if(playmode === playmodes.WITH_AI && swapTurn) {
          setAITurnFirst(true);
        }

        const player = swapTurn ? 'o' : 'x';
        const notification = <><span className={player}>{player}</span> turn first</>;
        setNotification(notification, 1500);
      }, 2000);
    }, [playmode, swapTurn]);

    const checkWinner = useCallback(() => {
      const winner = Helper.calculateWinner(squares);
      const tie = Helper.isBoardFilled(squares);

      if(winner || tie) {
        if(winner) { 
          const notification = <><span className={xo}>{xo}</span> Win</>;
          setNotification(notification, 1500);
          console.log(xo + " Win!");

          let newScores = scores;
          newScores[xo === 'x' ? 0 : 1]++;
          setScore(newScores);
        } else {
          setNotification("Draw", 1500);
          console.log("Draw!");
        }

        setRoundEnded(true);
        setWinLines(Helper.getWinnerLine(squares));
        startNewRound();
      } else {
        setXIsNext(!xIsNext);

        if(playmode === playmodes.WITH_AI && xo === 'x') {
          setAIDoMove(true);
        }
      }
    }, [squares, startNewRound, xo, scores, xIsNext, playmode]);

    const makeMove = useCallback((i) => {
      if(squares[i]) return;
      
      squares[i] = xo;
      const history = [...historyPoint, squares];
      
      setHistory(history);
      setStepNumber(history.length - 1);
      
      checkWinner();
    }, [historyPoint, squares, xo, checkWinner]);

    const handleClick = (i) => {
      if(squares[i] || roundEnded || AIMove) return;

      console.log("player select square " + i);
      makeMove(i);
    }  
    
    function restart() {
      console.log("restart");
      
      setHistory([Array(9).fill(null)]);
      setStepNumber(0);
      setXIsNext(true);
    }

    //Check restart
    useEffect(() => {
      if(isRestart) {
        restart();
      }
    }, [isRestart]);

    //Check AI movement
    useEffect(() => {
      if(AIDoMove) {
        setAIMove(true);
        setTimeout(function() {
          const bestSquare = Helper.findSquare(difficulty, squares, xo);
          if (bestSquare !== -1) {
            console.log("AI select best square " + bestSquare);
            makeMove(bestSquare);
            setAIMove(false);
          }
        }, 500);

        setAIDoMove(false);
      }
    }, [AIDoMove, difficulty, squares, xo, makeMove]);

    //Check if AI first turn
    useEffect(() => {
      if(AITurnFirst) {
        setAIMove(true);
        setTimeout(function() {
          const randomSquare = Helper.random(0, 8);
          console.log("AI turn first and select random square " + randomSquare);
          makeMove(randomSquare);
          setAIMove(false);
        }, 500);
        
        setAITurnFirst(false);
      }
    }, [AITurnFirst, makeMove]);

    return(
      <>
        <div class="board-wrapper">
          <div className="score-wrapper">
            <div className={"player x " + ((xo === 'x') && "active")} >x</div>
            <div className="score centered">
              <Notification active={showNotification} value={notificationText} />
              {scores[0]} - {scores[1]}
            </div>
            <div className={"player o " + ((xo === 'o') && "active")} >o</div>
          </div>
          <Board squares={current} lines={winLines} onClick={i => handleClick(i)} />
        </div>
        <RiRestartFill className="restart" onClick={() => restart()} />
      </>
    );
}

export default Game;
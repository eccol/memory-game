import { useState } from "react";
import Card from "./Card.jsx";
import { shuffleArray } from "../helpers/shuffle.js";

const NUMBER_OF_CARDS = 12;

export default function Board() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [guesses, setGuesses] = useState([]);

  const clickEvent = (e) => {
    const guess = e.target.dataset.id;
    console.log(guess);
    if (!guesses.includes(guess)) {
      setScore(score + 1);
      setGuesses([...guesses, guess]);
      if (score + 1 > highScore) {
        setHighScore(score + 1);
      }
    } else {
      setScore(0);
      setGuesses([]);
    }
  };

  const cards = [];
  for (let i = 0; i < NUMBER_OF_CARDS; i++) {
    cards.push(<Card key={i} id={i} clickEvent={clickEvent} />);
  }
  shuffleArray(cards);

  return (
    <div className="board">
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
      <h1>Board</h1>
      {cards}
    </div>
  );
}

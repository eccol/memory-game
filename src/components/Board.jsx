import { useState } from "react";
import Card from "./Card.jsx";
import { shuffleArray } from "../helpers/shuffle.js";

const NUMBER_OF_CARDS = 12;

export default function Board() {
  const [score, setScore] = useState(0);
  const [guesses, setGuesses] = useState([]);

  const clickEvent = (e) => {
    const guess = e.target.dataset.id;
    console.log(guess);
    if (!guesses.includes(guess)) {
      setScore(score + 1);
      setGuesses([...guesses, guess]);
    }
  };

  const cards = [];
  for (let i = 0; i < NUMBER_OF_CARDS; i++) {
    cards.push(<Card key={i} id={i} clickEvent={clickEvent} />);
  }
  shuffleArray(cards);

  return (
    <div className="board">
      <p>{score}</p>
      <h1>Board</h1>
      {cards}
    </div>
  );
}

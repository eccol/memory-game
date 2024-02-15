import Card from "./Card.jsx";

const NUMBER_OF_CARDS = 12;

export default function Board() {
  const cards = [];
  for (let i = 0; i < NUMBER_OF_CARDS; i++) {
    cards.push(<Card />);
  }

  return (
    <div className="board">
      <h1>Board</h1>
      {cards}
    </div>
  );
}

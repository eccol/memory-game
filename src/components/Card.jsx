export default function Card({ id, clickEvent }) {
  return (
    <p onClick={clickEvent} data-id={id}>
      Card {id}
    </p>
  );
}

import styles from "./ListCards.module.scss";

const EMPTY_OBJ = {};

function ListCards(_props) {
  const props = _props || EMPTY_OBJ;
  const cards = props.cards || [];
  const cardsHTML = cards.map((card, key) => {
    return <Card key={key} content={card.content} title={card.title} />;
  });
  return (
    <>
      <h2 className={styles.heading}>{props.title}</h2>
      {cardsHTML}
    </>
  );
}

function Card(_props) {
  const props = _props || EMPTY_OBJ;
  return (
    <div className={styles.card}>
      <h3 className={styles.subHeading}>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default ListCards;

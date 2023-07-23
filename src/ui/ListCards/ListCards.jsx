import styles from "./ListCards.module.scss";

const EMPTY_OBJ = {};

function ListCards(_props) {
  const props = _props || EMPTY_OBJ;
  const cards = props.cards || [];
  const cardsHTML = cards.map((card, key) => {
    console.log(card.user_id);
    const isCurrentUser = props.user_id === card.user_id;
    return (
      isCurrentUser && (
        <Card
          key={key}
          content={card.content}
          title={card.title}
          author={props.author}
        />
      )
    );
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
      <small>by: {props.author}</small>
      <p>{props.content}</p>
    </div>
  );
}

export default ListCards;

import styles from "./ListCards.module.scss";

const EMPTY_OBJ = {};

function ListCards(_props) {
  const props = _props || EMPTY_OBJ;
  const cards = props.cards || [];
  const cardsHTML = cards.map((card, key) => {
    return (
      <Card
        key={card.id}
        title={card.title}
        description={card.abstract}
        byline={card.byline}
        description={card.abstract}
        published_date={card.published_date}
        section={card.section}
      />
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
      <span className={styles.sectionLabel}>{props.section}</span>
      <h3 className={styles.subHeading}>{props.title}</h3>
      <div>
        <span>
          {props.published_date} - {props.byline}
        </span>
      </div>
      <p>{props.description}</p>
    </div>
  );
}

export default ListCards;

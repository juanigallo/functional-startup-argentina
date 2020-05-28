import React from "react";
import Card from "../Card";

import "./style.scss";

function Cards(props) {
  const { cards } = props;
  return (
    <section className="mainContainer">
      {cards &&
        cards.map((card) => {
          return (
            <Card
              key={card.id}
              title={card.name}
              description={card.description}
            />
          );
        })}
    </section>
  );
}

export default Cards;

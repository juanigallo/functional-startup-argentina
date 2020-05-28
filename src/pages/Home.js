import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import CardsContext from "../contexts/CardsContext";

function Home() {
  const cards = useContext(CardsContext);
  const [filteredCards, setFilteredCards] = useState(cards);

  function handleSearch(value) {
    const result = cards.filter((card) => {
      const normalizedName = card.name.toLowerCase();
      const normalizedValue = value.toLowerCase();

      return normalizedName.includes(normalizedValue);
    });

    setFilteredCards(result);
  }

  return (
    <React.Fragment>
      <Navbar canSearch handleChange={handleSearch} />
      <Cards cards={filteredCards} />
    </React.Fragment>
  );
}

export default Home;

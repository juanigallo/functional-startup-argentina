import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Help from "./pages/Help";
import { CardProvider } from "./contexts/CardsContext";
import Cards from "./data/cards.json";

function App() {
  console.log(Cards);
  return (
    <Router>
      <CardProvider value={Cards}>
        <Route exact path="/">
          <Home />
        </Route>
      </CardProvider>
      <Route exact path="/ayuda">
        <Help />
      </Route>
    </Router>
  );
}

export default App;

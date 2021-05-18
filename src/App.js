import React from "react";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./HomeScreen/Home";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import TrackingDetails from "./components/TrackingDetails";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:input" component={TrackingDetails} />
        <Route path="/about" component={SectionTwo} />
        <Route path="/contact" component={SectionThree} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

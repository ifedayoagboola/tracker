import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./HomeScreen/Home";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import TrackingPage from "./components/TrackingPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [errMsg, setErrMsg] = useState();
  const [results, setResults] = useState();
  const [idValues, setIdValues] = useState();
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home
            idValues={idValues}
            setIdValues={setIdValues}
            results={results}
            errMsg={errMsg}
            setErrMsg={setErrMsg}
          />
        </Route>
        <Route path="/:idDetails" component={TrackingPage} />
        <Route path="/about" component={SectionTwo} />
        <Route path="/contact" component={SectionThree} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

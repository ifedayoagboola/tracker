import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./HomeScreen/Home";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import TrackingPage from "./components/TrackingPage";
import Partnership from "./components/Partnership";
import Toc from "./components/Toc";
import Privacy from "./components/Privacy";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [errMsg, setErrMsg] = useState();
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
            errMsg={errMsg}
            setErrMsg={setErrMsg}
          />
        </Route>

        <Route path="/details/:idDetails" component={TrackingPage} />
        <Route path="/partners" component={Partnership} />
        <Route path="/about" component={SectionTwo} />
        <Route path="/contact" component={SectionThree} />
        <Route path="/toc" component={Toc} />
        <Route path="/privacy" component={Privacy} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

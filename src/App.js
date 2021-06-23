import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Route from "./components/route";
import CheckCounterPage from "../src/containers/CheckCounterContainer";
import RegisterPage from "../src/containers/RegisterContainer";
import pageThree from "../src/components/pages/pageThree";
import pageFour from "../src/containers/pageFourPro";
import pageFive from "../src/components/pages/pageFive";
import pageSix from "../src/components/pages/pageSix";
import pageSeven from "../src/components/pages/pageSeven";
import HomePage from  "../src/containers/HomeContainer"
import LoginContainer from "./containers/LoginContainer";

import { root, checkCounter, three, four, five, six, seven, home, register } from "./AppRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>


          <Route path={home} component={HomePage} />
          <Route path={checkCounter} component={CheckCounterPage} />
          <Route path={three} component={pageThree} />
          <Route path={four} component={pageFour} />
          <Route path={five} component={pageFive} />
          <Route path={six} component={pageSix} />
          <Route path={seven} component={pageSeven} />
          <Route path={register} component={RegisterPage} />
          <Route path={root} component={LoginContainer} />



          <Redirect to={root} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

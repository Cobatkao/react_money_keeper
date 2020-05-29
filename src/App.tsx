import React from 'react';
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import NoMatch from "./views/NoMatch";
import Statistic from "./views/Statistic";
import Money from "./views/Money";
import Tag from "./views/Tag";

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/tags">
                  <Tag/>
              </Route>
              <Route path="/money">
                  <Money/>
              </Route>
              <Route path="/statistic">
                  <Statistic/>
              </Route>
              <Redirect exact path="/" to="/tags"/>
              <Route path="*" component={NoMatch}/>
          </Switch>
      </Router>
  );
}

export default App;

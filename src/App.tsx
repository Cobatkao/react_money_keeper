import React from 'react';
import { BrowserRouter as Router, Switch, Link, Redirect, Route } from 'react-router-dom';
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display:flex;
  flex-direction: column;
`;

const Main = styled.main`
  border: 1px solid green;
  flex-grow: 1;
  overflow: auto;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    > li {
      text-align:center;
      width: 33.33%;
      padding-top: 19px;
      padding-bottom: 19px;
    }
  }
`;

function App() {
  return (

      <Router>
        <Wrapper>
        <Main>
          <Switch>
          <Route path="/tags" component={Tags} />
          <Route path="/money" component={Money} />
          <Route path="/statistic" component={Statistic} />
          <Redirect exact path="/" to="/tags" />
          <Route path="*" component={NoMatch} />
        </Switch>
        </Main>
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签页面</Link>
            </li>
            <li>
              <Link to="/money">记录页面</Link>
            </li>
            <li>
              <Link to="/statistic">数据页面</Link>
            </li>
          </ul>
        </Nav>

        </Wrapper>
      </Router>
  );
}

function Statistic() {
  return <h2>数据页面</h2>;
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记录页面</h2>;
}

function NoMatch() {
  return <h2>你到了不存在的页面Orz</h2>
}

export default App;

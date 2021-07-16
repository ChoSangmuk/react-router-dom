import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home ...
    </div>
  );
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li><NavLink to="/topics/1">HTML</NavLink></li>
        <li><NavLink to="/topics/2">JS</NavLink></li>
        <li><NavLink to="/topics/3">React</NavLink></li>
      </ul>
      <switch>
        <Route path="/topics/1">HTML ... </Route>
        <Route path="/topics/2">JS ... </Route>
        <Route path="/topics/3">React ... </Route>
      </switch>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact ...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React Router Dom</h1>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/topics"><Topics /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root')
);
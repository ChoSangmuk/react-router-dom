import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home ...
    </div>
  );
}
var contents = [
  { id: 1, title: "HTML", description: "HTML ... " },
  { id: 2, title: "JS", description: "JS ... " },
  { id: 3, title: "React", description: "React ... " },
]
function Topic() {
  return (
    <div>
      <h3>{this.props.title}</h3>
      {this.props.description}
    </div>
  );
}
function Topics() {
  var list = contents.map(content => <li key={content.id}><NavLink to={"/topics/" + content.id}>{content.title}</NavLink></li>);
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {list}
      </ul>
      <Route pat="/topics/:topic_id">
        <Topic></Topic>
      </Route>
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
        <Route exact path="/"> <Home /> </Route>
        <Route path="/topics"> <Topics /> </Route>
        <Route path="/contact"> <Contact /> </Route>
        <Route path="/"> <Home /> </Route>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

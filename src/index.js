import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route, Switch, NavLink, useParams } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home ...
    </div>
  );
}

var contents = [
  { id: 1, title: 'HTML', description: 'HTML is ...' },
  { id: 2, title: 'JS', description: 'JS is ...' },
  { id: 3, title: 'React', description: 'React is ...' },
]

function Topics() {
  var list = contents.map(value =>
    <li key={value.id}>
      <NavLink to={"/topics/" + value.id}>{value.title}</NavLink>
    </li>
  )

  return (
    <div>
      <h2>Topics</h2>
      <ul>{list}</ul>
      <Route path="/topics/:topic_id"><Topic /></Route>
    </div>
  );
}

function Topic() {
  var { topic_id } = useParams();
  var selected_contents = { title: "Sorry ... ", description: "Not found" }

  for (var i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(topic_id))
      selected_contents = contents[i];
  }

  return (
    <div>
      <h3>{selected_contents.title}</h3>
      {selected_contents.description}
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
      <h1>React Router DOM</h1>
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
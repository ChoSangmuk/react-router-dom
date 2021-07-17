# react-router-dom

- [Youtube](https://www.youtube.com/watch?v=WLdbsl9UwDc&t=4s)
- [강사 github](https://github.com/egoing/react-router-dom-example)
- [GitHub Pages](https://chosangmuk.github.io/react-router-dom-example)

## 개요 & 결과 미리보기
- [이전 수업 1. - React 기본 정리](https://github.com/ChoSangmuk/opentutorials-react-app)
- [이전 수업 2. - React Class, Function 컴포넌트 정리](https://github.com/ChoSangmuk/react-class-vs-function-style)
- [React Router DOM](https://reactrouter.com/web/guides/quick-start)는 여러 개의 페이지로 이루어진 애플리케이션을 쉽게 만들어 주게끔 도와주는 역할
- URL로 애플리케이션에 접근 시 URL과 연관된 컴포넌트를 렌더링하고, 그에 필요한 State나 Props를 관리해야함

## 실습환경
- Create React App으로 기본 구조 생성
```bash
# Shell
npx create-react-app .

# 실행 테스트
npm start
```
- 코딩은 크롬 브라우저의 개발자 도구를 이용하거나 각자 편한 실습환경을 이용
- index.css의 내용 삭제, App.js 파일 없이 index.js에 바로 코딩
- App안에서 사용할 3개의 컴포넌트 생성 
```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
      Topics ...
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
      <Home />
      <Topics />
      <Contact />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

## Install
- Routing 혹은 Router란 사용자가 특정 URL로 애플리케이션에 접근할 때, URL에 해당되는 적당한 컴포넌트를 사용자에게 보여 주는 것 
- React Router DOM 설치
```bash
# Shell
npm install react-router-dom
```

## Router
- Router와 Route는 다른 개념
- Router 중 BrowserRouter 사용하기 위해서 import
- React Router DOM을 적용하고 싶은 컴포넌트들의 최상위 컴포넌트(이 예제에서는 App)를 Router 컴포넌트로 감싸주면 됨
```js
// index.js ...
import { BrowserRouter as Router } from 'react-router-dom';
// ...
ReactDOM.render(
  <Router>
    <App />{/* App안에서는 BrowserRouter를 사용할 수 있는 상태가 됨 */}
  </Router>
  , document.getElementById('root')
);
```

## Route
- Route 역시 Router와 마찬가지로 import해서 사용
- 특정 URL이 입력되었을 때 사용되어야할 컴포넌트가 있다면 해당 컴포넌트를 Route 컴포넌트로 감싸주고 Route의 Props(path)에 해당 URL을 작성해주면 됨
- 이동이 편리하게 특정 URL로 이동시켜주는 변경해주는 a 태그를 삽입
```js
// index.js ... 
import { BrowserRouter as Router, Route } from 'react-router-dom';
// ...
function App() {
  return (
    <div>
      <h1>React Router DOM</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <Route path="/"><Home /></Route>
      <Route path="/topics"><Topics /></Route>
      <Route path="/contact"><Contact /></Route>
    </div>
  );
}
```
- "/topics" URL 입력 시, Home 컴포넌트와 Topics 컴포넌트 둘 다 사용됨
  - URL이 Route path를 포함하면 (Route로 감싼) 컴포넌트가 실행됨
  - exact를 사용하면 정확히 매칭되는 경우에만 (Route로 감싼) 컴포넌트가 사용됨
```js
// index.js ...
<Route exact path="/"><Home /></Route>
<Route path="/topics"><Topics /></Route>
<Route path="/contact"><Contact /></Route>
```
- 동적라우팅? 
  - 컴포넌트가 어디에 있던 간에 Route의 path를 지정하여 감싸주기만 하면, 그 컴포넌트(Route)가 화면에 출력되게 하는 것 
  - 다른 말로는 Route의 path에 특정 값을 넣어 해당 페이지로 이동할 수 있게 하는 것

## Switch
- Switch로 Route를 감쌌을 때, 입력된 URL이 path와 일치하는 1번째 Route가 발견되면 나머지 Route는 무시
- Switch 역시 Route, Router와 마찬가지로 import해서 사용
- 따라서, Switch의 하단에 path가 /인 Route를 놓으면 존재하지 않는 URL에 대해 예외 처리가능
```js
// index.js ...
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// ...
function App() {
  return (
    <div>
      <h1>React Router DOM</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/contact">Contact</a></li>
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
```

## Link
- HTML이 기본적으로 제공하는 a 태그를 사용하는 경우, 페이지가 이동하며 새로고침 됨
- 이를 방지하기 위해 React Router DOM에서 Link 컴포넌트를 지원
  - a 태그 대신, Link 컴포넌트
  - href 속성 대신, to Props
- Link 역시 Switch, Route, Router와 마찬가지로 import해서 사용
```js
// index.js ...
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// ...
function App() {
  return (
    <div>
      <h1>React Router DOM</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/contact">Contact</Link></li>
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
```
- Link 컴포넌트 지원 없이 같은 기능을 만든다면, a 태그의 onClick 이벤트에 event.preventDefault()를 이용해서 기본 동작을 방지하고, URL를 변경해야함 (복잡, 어려움)

## HashRouter
- Routing과 Routing을 새로고침 없이 처리하는 Link를 알면 React Router DOM을 대략적으로 사용할 줄 아는 것
- BrowserRouter을 사용하기 위해서는 사용자가 어떤 path로 들어와도 동일한 웹 페이지를 제공할 수 있어야함
- HashRouter 사용 시, URL에 #이 생김 (http://localhost:3000/#/topics)
  - #의 뒷 부분은 북마크라는 뜻으로 웹 서버는 북마크를 무시함
  - React Router DOM이 해당 북마크 정보(#의 뒷 부분)를 가지고 와서 관련된 컴포넌트를 Routing함

## NavLink
- Navigation Link의 줄임말, Link와 유사하지만 기능이 추가됨
- NavLink 역시 Link, Switch, Route, Router와 마찬가지로 import해서 사용
```js
// index.js ...
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
// ...
function App() {
  return (
    <div>
      <h1>React Router DOM</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
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
```
- Link와 NavLink는 HTML로 표현될 때, a 태그로 변경되어 표기됨
- 기능은 Link와 똑같지만 NavLink 클릭 시, 해당 a 태그의 속성에 class="active"가 생김
  - class(active) 이용해서 현재 어떤 NavLink에 위치하고 있는지 표시(css이용)해줄 수 있음 
```css
/* index.css */
.active{
  background-color: skyblue;
  text-decoration: none;
}
```
- Route의 path와 같은 이유로 NavLink to="/" 에도 클래스가 계속 생겨있음
  - exact 추가하여 정확히 일치할 때만 사용되게끔 수정
```js
// index.js ...
<ul>
  <li><NavLink exact to="/">Home</NavLink></li>
  <li><NavLink to="/topics">Topics</NavLink></li>
  <li><NavLink to="/contact">Contact</NavLink></li>
</ul>
```

## Nested Routing
- Route 안에 Route 중첩 동작 가능
```js
// index.js ...
function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li><NavLink to="/topics/1">HTML</NavLink></li>
        <li><NavLink to="/topics/2">JS</NavLink></li>
        <li><NavLink to="/topics/3">React</NavLink></li>
      </ul>
      <Switch>
        <Route path="/topics/1">HTML ... </Route>
        <Route path="/topics/2">JS ... </Route>
        <Route path="/topics/3">React ... </Route>
      </Switch>
    </div>
  );
}
```

## Parameter
- Topics의 양이 많아지거나 동적으로 데이터를 받아오는 경우, 위와 같은 방법을 사용할 수 없음 
- 배열(contents)을 만들고 map를 이용하여 자동으로 리스트(ul)를 생성
```js
// index.js ...
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
      <Switch>
        <Route path="/topics/1">HTML ... </Route>
        <Route path="/topics/2">JS ... </Route>
        <Route path="/topics/3">React ... </Route>
      </Switch>
    </div>
  );
}
```
- Route, Switch 부분 역시 자동으로 만들어 지도록 하고 싶음, map으로도 구현 가능
```js
// index.js ...
function Topics() {
  var list = contents.map(value =>
    <li key={value.id}>
      <NavLink to={"/topics/" + value.id}>{value.title}</NavLink>
    </li>
  )
  var route = contents.map(value =>
    <Route key={value.id} path={"/topics/" + value.id}>{value.title}</Route>
  )

  return (
    <div>
      <h2>Topics</h2>
      <ul>{list}</ul>
      <Switch>{route}</Switch>
    </div>
  );
}
```
- React Router DOM에서는 Route의 path에 **:ParameterName** 을 통해 문자열로 Parameter를 입력할 수 있음
- 하위 컴포넌트에서 해당 Parameter를 사용하기 위해서는 useParams이라는 React Hook을 사용
- useParams 역시 NavLink, Link, Switch, Route, Router와 마찬가지로 import해서 사용
```js
// index.js ...
import { HashRouter as Router, Route, Switch, NavLink, useParams } from 'react-router-dom';
// ...
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
```

## 수업을 마치며
- React Server Side Rendering (SSR)
- Code Splitting

## GitHub Pages 배포
- gh-pages 설치
```sh
# Shell
npm i gh-pages 

# Check Username, projectName
git remote -v
# origin  https://github.com/ChoSangmuk/react-router-dom-example.git (fetch)
# origin  https://github.com/ChoSangmuk/react-router-dom-example.git (push)
```
- package.json 설정
```json
// package.json ...
"scripts": {
  // ...
  "predeploy":"npm run build",
  "deploy":"gh-pages -d build"
},
// ...
"homepage": "https://chosangmuk.github.io/react-router-dom-example"
```
- 배포 실행
```sh
# Shell
# config git 
git config --global user.email "tkdanr612@gmail.com"
git config --global user.name "ChoSangmuk"

# deploy
npm run deploy
# ChoSangmuk/pw
```

## Reference
- 동적라우팅
  - https://velog.io/@jjburi/React-%EB%8F%99%EC%A0%81-%EB%9D%BC%EC%9A%B0%ED%8C%85Dynamic-Routing
  - https://velog.io/@edie_ko/React-%EB%8F%99%EC%A0%81%EB%9D%BC%EC%9A%B0%ED%8C%85-Dynamic-Routing%EC%9C%BC%EB%A1%9C-%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
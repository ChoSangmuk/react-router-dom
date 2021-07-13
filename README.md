# react-router-dom

- [Youtube](https://www.youtube.com/watch?v=WLdbsl9UwDc&t=4s)
- [강사 github](https://github.com/egoing/react-router-dom-example)

## 개요 & 결과 미리보기
- [이전 수업 1. - React 기본 정리](https://github.com/ChoSangmuk/opentutorials-react-app)
- [이전 수업 2. - React Class, Function 컴포넌트 정리](https://github.com/ChoSangmuk/react-class-vs-function-style)
- [React Router Dom](https://reactrouter.com/web/guides/quick-start)는 여러 개의 페이지로 이루어진 애플리케이션을 쉽게 만들어 주게끔 도와주는 역할
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
      <h1>React Router Dom</h1>
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
- React Router Dom 설치
```bash
# Shell
npm install react-router-dom
```

## Router
- Router와 Route는 다른 개념
- Router 중 BrowserRouter 사용하기 위해서 import
- React Router Dom을 적용하고 싶은 컴포넌트들의 최상위 컴포넌트(이 예제에서는 App)를 Router 컴포넌트로 감싸주면 됨
```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
- 특정 URL이 입력되었을 때 사용되어야할 컴포넌트가 있다면 해당 컴포넌트를 Route 컴포넌트로 감싸주고 Route path Props에 해당 URL을 작성해주면 됨
- 이동이 편리하게 특정 URL로 이동시켜주는 변경해주는 a 태그를 삽입
```js
// index.js ... 
import { BrowserRouter as Router, Route } from 'react-router-dom';
// ...
function App() {
  return (
    <div>
      <h1>React Router Dom</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <Route path="/"> <Home /> </Route>
      <Route path="/topics"> <Topics /> </Route>
      <Route path="/contact"> <Contact /> </Route>
    </div>
  );
}
```
- "/topics" URL 입력 시, Home 컴포넌트와 Topics 컴포넌트 둘 다 사용됨
  - Route의 Props 중 exact가 없으면 path와 URL이 비슷한 건 전부 다 매칭됨
  - exact를 사용하면 정확히 매칭되는 경우에만 컴포넌트가 사용됨

## Switch
- Switch Componen는 exact를 사용하지 않고도 exact를 사용한 것과 같은 효과를 원할 때 route를 switch로 감싸주면됨
switch 역시  임포트해서 사용

- 스위치로 라우트를 감싸게 되면 path와 유사한 펏번째 컴퍼넌트가 발견되면 나머지 컴포넌트는 무시
- 따라서, 맨 아래에 / 를 놓으면 존재하지 않는 라우터에 대한 예외 처리가 됨

## Link
\<a\>\</a\> 태그를 사용하는 경우 페이지가 리로드 됨
이를 방지하기 위해 리액트 라우터 돔에서 지우너하는 것이 Link

```
<a href>대신 <Link to > 사용

  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/topics">Topics</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
```

## HashRouter
- 주소, path가 변경되고 있음 - 사용자가 어떤 path로 들어와도 동일한 웹페이지를 서비스 할수 있어야함
- HashRouter 사용 시, 주소에 # 생김
- #이 붙으며 뒤에는 북마크라는 뜻으로 웹 서버는 #뒤를 무시함
- 하지만 자바스크립트를 이용해서 #뒤를 가져올 수 있기 때문에, 리액트 라우터 돔이 해당 정보를 가지고 와서
해당되는 컴포넌트를 라우팅해줌

- 웹서버를 설정을 바꿔서 어떤 패스로 들어오건 간의 루트 페이지에있느느 html 파일을 서비스 할 수 있다면
BrowserRouter를 써도됨

## NavLink
- 네비게이션, 링크와 유사한데 기능이 추가됨
- react-router-dom에서 임포트해서 써야함
- 기능은 똑같음, a 태그에 active 라는 클래스가 생김
- 그런데 / 에도 클래스가 계속 생겨있음! 왜? route의 path와 같은 이유
- exact 추가하면 의도대로됨
- 이걸 이용해서 뭘할건데? 사용자가 현재 자식이 어떤페이지에 위치하고있는지 표시(css이용)해줄 수 있음 

## Nested Routing
- path="/topics:id"
- 라우터 안에 라우터 중첩 동작
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

- 잘 동작함

## parameter
- 양이 많아지면 별로임
- 배열을 만들어서 자동으로 리스트가 만들어 지고, 자동으로 라우트가 만들어 지도록 하고 싶음
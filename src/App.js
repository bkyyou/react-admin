import React from 'react';
// import logo from './logo.svg';

// 样式入口
import './style/main.scss';

// import { Router, Route, Switch, HashHistory, Link } from 'react-router-dom';
import { Route, Switch, HashRouter } from 'react-router-dom';

// import Home from './view/Home.js';
// import About from './view/About.js';
// import New from './view/New.js';
// import Login from './view/login/index.js';

import Register from './view/account/Register.js';
import Login from './view/account/Login.js';

import Home from './view/home/index.js';
// import MyProgress from './view/progress';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route component={Login} exact path="/" />
        <Route component={Register} path="/register" />
        <Route component={Login} path="/login" />
        <Route component={Home} path="/home" />
        {/* <Route component={MyProgress} path="/progress" /> */}
        {/* <Route component={New} path="/new" /> */}
        {/* <Route component={About} path="/about" /> */}
      </Switch>
    </HashRouter>
  );
}

export default App;

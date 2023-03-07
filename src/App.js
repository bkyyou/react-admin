import React from 'react';
// import logo from './logo.svg';

// 样式入口
// import './style/main.scss';
import './style/main.css';

// import { Router, Route, Switch, HashHistory, Link } from 'react-router-dom';
import { Route, Switch, HashRouter } from 'react-router-dom';

// import Home from './view/Home.js';
// import About from './view/About.js';
// import New from './view/New.js';
// import Login from './view/login/index.js';

import HooksC from './view/test/Hooks.js';
import HooksC2 from './view/test/Hook2.js';
import test from './view/test/test.js';
import upload from './view/upload/index.js';
import FormRender from './view/test/FormRender.js';
// import ReduxPage from './view/test/ReduxPage.jsx';
import ReduxPage2 from './view/test/ReduxPage2';

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
        <Route component={HooksC} path="/hooks" />
        <Route component={HooksC2} path="/hook2" />
        <Route component={test} path="/test" />
        <Route component={upload} path="/upload" />
        {/* <Route component={ReduxPage} path="/ReduxPage" /> */}
        <Route component={ReduxPage2} path="/ReduxPage2" />
        {/* <Route component={Drag} path="/Drag" /> */}
        {/* <Route component={MyProgress} path="/progress" /> */}
        {/* <Route component={New} path="/new" /> */}
        {/* <Route component={About} path="/about" /> */}
      </Switch>
    </HashRouter>
  );
}

export default App;

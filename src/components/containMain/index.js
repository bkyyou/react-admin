import React, { Component } from "react";

import { Switch } from "react-router-dom";

// import loadable from '@loadable/component';

import  PrivateRouter from "../privateRouter/index";

// import UserAdd from '../../view/user/add/index.js';
// import UserList from '../../view/user/list/index';

// import DepartmentAdd from '../../view/department/add/index';
// import DepartmentList from '../../view/department/list/index';

// 自动化工程
const files = require.context("../../view/", true, /\.js$/); 
// const files = require.context("../../router/", true, /\.js$/); 

// // ./account/Login.js  ./department/add/index.js
console.log('files', files);
console.log('files.key()', files.keys());
console.log('files.keys', files.keys);

// ./src/view/account/Login.js
// "./src/view/user/list/index.js"
let noContainsArr = ['account', 'test', 'home'];
/**
 * component ../../view/user/add/index
 * path /home/user/add
 */
let allHomeRouter = [];
// files(keys).default
// var paths = files.keys().map(key => {
//   return files.resolve(key);
// });
files.keys().forEach(key => {
  if (!(new RegExp(noContainsArr.join('|'), 'ig').test(key)))  allHomeRouter.push(getRightData(key))
})

// console.log('paths', paths);

function getRightData(val) {
  console.log('val', val);
  var arr = val.split('/');
  // console.log('arr', arr);
  // var component = '../../' + arr.slice(arr.indexOf('view')).join('/');
  // console.log('component', component); .join('/')
  var path = '/home/' + arr.slice(1, arr.length - 1).join('/');
  // console.log('path', path);
  // console.log('files[val].default', files(val).default);
  // path = import(path);
  return {
    component: files(val).default,
    path
  }
}

// allHomeRouter = allHomeRouter.slice(2);

console.log('allHomeRouter', allHomeRouter);


class ContainMain extends Component{
  // constructor(props) {
  //   this.state = {

  //   }
  // }
  render() {
    return (
      <Switch>
        {/* <PrivateRouter exact path="/home/user/add" component={UserAdd}></PrivateRouter>
        <PrivateRouter exact path="/home/user/list" component={UserList}></PrivateRouter> */}

        {
          allHomeRouter.map(val => {
            return <PrivateRouter exact path={val.path} component={val.component} key={val.path}></PrivateRouter>
            // return <PrivateRouter exact path={val.path} component={val.component}></PrivateRouter>
          })
        }
      </Switch>
    )
  }
}

export default ContainMain;
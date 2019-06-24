var React = require('react');
var ReactDOM = require('react-dom');
var MyButtonController = require('./components/MyButtonController');

//渲染example视图
ReactDOM.render(
  <MyButtonController/>,
  document.querySelector('#example')
);

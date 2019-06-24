var React = require('react');
var ListStore = require('../stores/ListStore');
var ButtonActions = require('../actions/ButtonActions');
var MyButton = require('./MyButton');

var MyButtonController = React.createClass({
  getInitialState: function () {
    return {
      items: ListStore.getAll()
    };
  },

  componentDidMount: function () {
    ListStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    ListStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      items: ListStore.getAll()
    });
  },

  //绑定Action到处理函数
  createNewItem: function (event) {
    ButtonActions.addNewItem('new item');
  },

  deleteNewItem: function (event) {
    ButtonActions.deleteNewItem();
  },

  //将数据和事件响应传入到子组件
  render: function () {
    return <MyButton
      items={this.state.items}
      onClick={this.createNewItem}
      onDeleteClick={this.deleteNewItem}
    />;
  }

});

module.exports = MyButtonController;

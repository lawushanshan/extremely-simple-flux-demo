var React = require('react');

var MyButton = function(props) {
  var items = props.items;
  var itemHtml = items.map(function (listItem, i) {
    return <li key={i}>{listItem}</li>;
  });

  //绑定相关的信息到子组件，子组件触犯Action
  return <div>
    <ul>{itemHtml}</ul>
    <button onClick={props.onClick}>New Item</button>
    <button onClick={props.onDeleteClick}>Delete Item</button>
  </div>;
};

module.exports = MyButton;

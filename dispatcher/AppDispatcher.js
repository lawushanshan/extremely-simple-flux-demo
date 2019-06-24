var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var ListStore = require('../stores/ListStore');

// dispatch用来接受Action信息，用纯函数的身份做相应的数据处理和触发change事件
// store中数据发生改变，并且View中监听到change事件，所以调用相关的回调函数，重新获取数据，从而导致React中数据刷新
AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'ADD_NEW_ITEM':
      ListStore.addNewItemHandler(action.text);
      ListStore.emitChange();
      break;
    case 'DEL_NEW_ITEM':
        ListStore.deleteItemHandler();
        ListStore.emitChange();
    default:
      // no op
  }
})

module.exports = AppDispatcher;

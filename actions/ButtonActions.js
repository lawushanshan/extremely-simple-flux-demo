var AppDispatcher = require('../dispatcher/AppDispatcher');
// Action用来出发消息到dispatch
var ButtonActions = {

  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  },
  deleteNewItem: function(){
    AppDispatcher.dispatch({
      actionType: 'DEL_NEW_ITEM'
    });
  }

};

module.exports = ButtonActions;

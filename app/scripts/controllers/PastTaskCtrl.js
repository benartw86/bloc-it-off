(function() {
  function PastTaskCtrl(Item) {
    this.items = Item.expiredItems();
    this.submit = function(name) {
      Item.add(name);    
    }; 
  } 
    
  angular
    .module('blocitOff')
    .controller('PastTaskCtrl', ['Item', PastTaskCtrl]);
    
})();
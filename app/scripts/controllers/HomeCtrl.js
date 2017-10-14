(function() {
    function HomeCtrl(Item) {
      this.items = Item.activeItems();
      this.submit = function(name, priority){
        Item.add(name, priority);      
      };    
        
      this.shouldShow = function(item) {
        if(item.expiresAt < Date.now()) {
          return false;    
        }      
          return true;
      }    
        
      ctrl.items = Item.all
    }

    
    
    
    angular
        .module('blocitOff')
        .controller('HomeCtrl', ['Item', HomeCtrl]);
})();
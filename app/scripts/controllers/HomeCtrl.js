(function() {
    function HomeCtrl(Item) {
      var ctrl = this; 
      this.items = Item.all;
      this.submit = function(name){
        Item.add(name);      
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
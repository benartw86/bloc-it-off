(function() {
    function HomeCtrl(Item) {
      var ctrl = this; 
      this.items = Item.all;
      this.submit = function(name){
        Item.add(name);      
      };    
        
      ctrl.items = Item.all
    }

    
    
    
    angular
        .module('blocitOff')
        .controller('HomeCtrl', ['Item', HomeCtrl]);
})();
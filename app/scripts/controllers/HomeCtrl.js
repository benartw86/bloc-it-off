(function() {
    function HomeCtrl(Item) {
      var ctrl = this;   
        
      ctrl.items = Item.all
    }

    
    
    
    angular
        .module('blocitOff')
        .controller('HomeCtrl', ['Item', HomeCtrl]);
})();
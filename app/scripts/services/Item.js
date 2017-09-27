(function(){
  function Item($firebaseArray){
    var Item = {};
      
    var ref = firebase.database().ref().child('items');
    //download the data into a local object
    var items = $firebaseArray(ref); 
    var expirationTime = 604740;  
    //loop through array of items to check to see if they are expired  
    Item.all = items;
      
    Item.add = function(item) {
      items.$add({
        name: item,
        createdAt: Date.now(),    
        expiresAt: Date.now() + expirationTime         
      });      
    }; 
    
    return Item;
  
  }
    
  angular
      .module('blocitOff')
      .factory('Item', ['$firebaseArray', Item])
})();
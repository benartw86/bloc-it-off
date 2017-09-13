(function(){
  function Item($firebaseArray){
    var Item = {};
      
    var ref = firebase.database().ref().child('items');
    //download the data into a local object
    var items = $firebaseArray(ref);  
    Item.all = items;
    
  Item.add = function(item) {
    items.$add({name: item});      
  }; 
    
    return Item;
  
  }
    
  angular
      .module('blocitOff')
      .factory('Item', ['$firebaseArray', Item])
})();
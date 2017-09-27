(function(){
  function List($firebaseArray){
    var List = {};
      
    var ref = firebase.database().ref().child('lists');
    //download the data into a local object
    var lists = $firebaseArray(ref);  
    List.all = lists;
    
  List.add = function(list) {
    lists.$add(name);      
  }; 
    
    return List;
  
  }
    
  angular
      .module('blocitOff')
      .factory('List', ['$firebaseArray', List])
})();
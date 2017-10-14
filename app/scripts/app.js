(function() {
     function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });
 
         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             });
         
         $stateProvider
           .state('past', {
                  url: '/past',
                  controller: 'PastTaskCtrl as past',
                  templateUrl: '/templates/past.html'
             });
     }
     
     angular
         .module('blocitOff', ['ui.router', 'firebase'])
         .config(config);
 })();
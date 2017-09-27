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
           .state('pastTask', {
                  url: '/pastTasks',
                  controller: 'PastTaskCtrl as pastTasks',
                  templateUrl: '/templates/pastTasks.html'
             });
     }
     
     angular
         .module('blocitOff', ['ui.router', 'firebase'])
         .config(config);
 })();
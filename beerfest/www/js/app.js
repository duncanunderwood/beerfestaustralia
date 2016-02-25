// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('app', ['ionic','ionic.service.core', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'ionic.service.analytics', 'ngCordova'])

.run(function($ionicPlatform, $ionicAnalytics) {
  $ionicPlatform.ready(function() {


    // Push Ionic
    var push = new Ionic.Push({
      "debug": true
    });

    push.register(function(token) {
      console.log("Device token:",token.token);
    });

    // Analytics ionic
    $ionicAnalytics.register();

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required

      StatusBar.styleDefault();
    }
  });
});


app.service('Todo', function() {

    var todos = [
        {'title': 'Test1', 'done': 'false'},
        {'title': 'Test2', 'done': 'false'},
        {'title': 'Test3', 'done': 'true'},
        {'title': 'Test4', 'done': 'true'}];

    this.list = function() {
        return todos;
    }

    this.add = function(todo) {
        todos.splice(0, 0, todo);
    }

});

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('app', ['ionic','ionic.service.core', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'ionic.service.analytics', 'ngCordova'])


.run(function($ionicPlatform, $ionicAnalytics) {
  $ionicPlatform.ready(function() {

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        window.open = cordova.InAppBrowser.open;
    }

    // kick off the platform web client
    Ionic.io();

    // this will give you a fresh user or the previously saved 'current user'
    var user = Ionic.User.current();

    // if the user doesn't have an id, you'll need to give it one.
    if (!user.id) {
      user.id = Ionic.User.anonymousId();
      // user.id = 'your-custom-user-id';
    }

    //persist the user
    user.save();

    // otherwise you can handle the success and failure using the promise returned by save()

var success = function(response) {
  console.log('user was saved');
};

var failure = function(error) {
  console.log('user was NOT saved');
};

user.save().then(success, failure);

    // Push Ionic
    var push = new Ionic.Push({

      "onNotification": function(notification) {
          alert('Teste push received!');
          console.log(notification);
        },
        "pluginConfig": {
          "android": {
            "iconColor": "#FFC900"
          }
        }
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

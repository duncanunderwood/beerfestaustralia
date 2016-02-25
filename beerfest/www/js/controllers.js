angular.module('app.controllers', ['ionic'])

.controller('todoController', ['$scope', 'Todo',
function($scope, Todo) {

    $scope.todos = Todo.list();
    $scope.addTodo = function(todo) {
        todo.done=false;
        Todo.add(angular.copy(todo));
        todo.title = '';

    }

}
])

.controller('homeCtrl', function($scope) {

})

.controller('fremantleCtrl', function($scope) {

})

.controller('eskCtrl', function($scope) {

})

.controller('melbourneCtrl', function($scope) {

})

.controller('mynotesCtrl', function($scope) {

})

.controller('eventInfoCtrl', function($scope) {

})

.controller('ticketsCtrl', function($scope) {

})

.controller('contactCtrl', function($scope) {


})

.controller('entertainmentCtrl', function($scope) {

})

.controller('vendorsCtrl', function($scope) {

})

.controller('dayPassCtrl', function($scope) {

})

.controller('accommodationPackageCtrl', function($scope) {

})

.controller('oscarLushCtrl', function($scope) {

})

.controller('alexRohanCtrl', function($scope) {

})

.controller('jaeandlionaCtrl', function($scope) {

})

.controller('arielaJacobsCtrl', function($scope) {

})

.controller('nAFASICtrl', function($scope) {

})

.controller('thePublicOpinionSixCtrl', function($scope) {

})

.controller('theBrowCtrl', function($scope) {

})

.controller('vendor1Ctrl', function($scope) {

})

.controller('vendor2Ctrl', function($scope) {

})

.controller('vendor3Ctrl', function($scope) {

})

.controller('vendor4Ctrl', function($scope) {

})

.controller('photosCtrl', function($scope) {

})

.controller('socialMediaCtrl', function($scope) {

})

.controller('cordovaStatusbar', function($scope) {

})

.controller('fremantle_eventinfoCtrl', function($scope) {

})

.controller('fremantle_stallsCtrl', function($scope) {

})

.controller('fremantle_sitemapCtrl', function($scope) {

})

.controller('esk_eventinfoCtrl', function($scope) {

})

.controller('esk_stallsCtrl', function($scope) {

})

.controller('esk_sitemapCtrl', function($scope) {

})

.controller('melbourne_eventinfoCtrl', function($scope) {

})

.controller('melbourne_stallsCtrl', function($scope) {

})

.controller('melbourne_sitemapCtrl', function($scope) {

})

.controller('esk_entertainmentCtrl', function($scope) {

})

.controller('esk_stall1Ctrl', function($scope) {

})

.controller('esk_stall2Ctrl', function($scope) {

})

.controller('esk_stall3Ctrl', function($scope) {

})

.controller('esk_stall4Ctrl', function($scope) {

})

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

.controller('melb_entertainmentCtrl', function($scope) {

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

.controller('extrainfoCtrl', function($scope) {

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

.controller('melb_stall_2brothersCtrl', function($scope) {

})

.controller('melb_stall_articfoxCtrl', function($scope) {

})

.controller('melb_stall_barrowboysCtrl', function($scope) {

})

.controller('melb_stall_blackheartCtrl', function($scope) {

})

.controller('melb_stall_brightCtrl', function($scope) {

})

.controller('melb_stall_cavalierCtrl', function($scope) {

})

.controller('melb_stall_clarevalleyCtrl', function($scope) {

})

.controller('melb_stall_colonialCtrl', function($scope) {

})

.controller('melb_stall_craftrevolutionCtrl', function($scope) {

})

.controller('melb_stall_custardandcoCtrl', function($scope) {

})

.controller('melb_stall_daintonCtrl', function($scope) {

})

.controller('melb_stall_exitCtrl', function($scope) {

})

.controller('melb_stall_feralbrewingcoCtrl', function($scope) {

})

.controller('melb_stall_flaminlambCtrl', function($scope) {

})

.controller('melb_stall_fourbrothersCtrl', function($scope) {

})

.controller('melb_stall_franksciderCtrl', function($scope) {

})

.controller('melb_stall_hawkersbeerCtrl', function($scope) {

})

.controller('melb_stall_hawthornbrewingcoCtrl', function($scope) {

})

.controller('melb_stall_himmelhundCtrl', function($scope) {

})

.controller('melb_stall_hopnationCtrl', function($scope) {

})

.controller('melb_stall_kaijuCtrl', function($scope) {

})

.controller('melb_stall_kurbsideCtrl', function($scope) {

})

.controller('melb_stall_lapalaCtrl', function($scope) {

})

.controller('melb_stall_melbpaellacompanyCtrl', function($scope) {

})

.controller('melb_stall_moobaacluckCtrl', function($scope) {

})

.controller('melb_stall_mrburgerCtrl', function($scope) {

})

.controller('melb_stall_mrlittleCtrl', function($scope) {

})

.controller('melb_stall_napoleoneCtrl', function($scope) {

})

.controller('melb_stall_piratelifeCtrl', function($scope) {

})

.controller('melb_stall_pricklymosesCtrl', function($scope) {

})

.controller('melb_stall_quietdeedsCtrl', function($scope) {

})

.controller('melb_stall_redduckCtrl', function($scope) {

})

.controller('melb_stall_smoothbeardCtrl', function($scope) {

})

.controller('melb_stall_soleillycheeCtrl', function($scope) {

})

.controller('melb_stall_southernCtrl', function($scope) {

})

.controller('melb_stall_stgerrysCtrl', function($scope) {

})

.controller('melb_stall_templeCtrl', function($scope) {

})

.controller('melb_stall_thataranciniCtrl', function($scope) {

})

.controller('melb_stall_threetroupersCtrl', function($scope) {

})

.controller('melb_stall_truebrewCtrl', function($scope) {

})

.controller('melb_stall_twobirdsCtrl', function($scope) {

})

.controller('melb_stall_twomenCtrl', function($scope) {

})

.controller('melb_stall_yelpCtrl', function($scope) {

})

.controller('melb_stall_younghenrysCtrl', function($scope) {

})

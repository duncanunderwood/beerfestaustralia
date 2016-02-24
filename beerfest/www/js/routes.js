angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


    .state('menu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })




    .state('menu.home', {
      url: '/home',
      views: {
        'side-menu21': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })

    .state('menu.fremantle', {
      url: '/fremantle',
      views: {
        'side-menu21': {
          templateUrl: 'templates/fremantle.html',
          controller: 'fremantleCtrl'
        }
      }
    })

    .state('menu.esk', {
      url: '/esk',
      views: {
        'side-menu21': {
          templateUrl: 'templates/esk.html',
          controller: 'eskCtrl'
        }
      }
    })

    .state('menu.melbourne', {
      url: '/melbourne',
      views: {
        'side-menu21': {
          templateUrl: 'templates/melbourne.html',
          controller: 'melbourneCtrl'
        }
      }
    })

    .state('menu.mynotes', {
      url: '/mynotes',
      views: {
        'side-menu21': {
          templateUrl: 'templates/mynotes.html',
          controller: 'mynotesCtrl'
        }
      }
    })

    .state('menu.eventInfo', {
      url: '/eventinfo',
      views: {
        'side-menu21': {
          templateUrl: 'templates/eventInfo.html',
          controller: 'eventInfoCtrl'
        }
      }
    })





    .state('menu.tickets', {
      url: '/tickets',
      views: {
        'side-menu21': {
          templateUrl: 'templates/tickets.html',
          controller: 'ticketsCtrl'
        }
      }
    })





    .state('menu.contact', {
      url: '/contact',
      views: {
        'side-menu21': {
          templateUrl: 'templates/contact.html',
          controller: 'contactCtrl'
        }
      }
    })





    .state('menu.entertainment', {
      url: '/entertainment',
      views: {
        'side-menu21': {
          templateUrl: 'templates/entertainment.html',
          controller: 'entertainmentCtrl'
        }
      }
    })





    .state('menu.vendors', {
      url: '/vendors',
      views: {
        'side-menu21': {
          templateUrl: 'templates/vendors.html',
          controller: 'vendorsCtrl'
        }
      }
    })





    .state('dayPass', {
      url: '/daypass',
      templateUrl: 'templates/dayPass.html',
      controller: 'dayPassCtrl'
    })





    .state('accommodationPackage', {
      url: '/accomodationpackage',
      templateUrl: 'templates/accommodationPackage.html',
      controller: 'accommodationPackageCtrl'
    })





    .state('oscarLush', {
      url: '/oscarlush',
      templateUrl: 'templates/oscarLush.html',
      controller: 'oscarLushCtrl'
    })





    .state('alexRohan', {
      url: '/alexrohan',
      templateUrl: 'templates/alexRohan.html',
      controller: 'alexRohanCtrl'
    })





    .state('jaeandliona', {
      url: '/jaeliona',
      templateUrl: 'templates/jaeandliona.html',
      controller: 'jaeandlionaCtrl'
    })





    .state('arielaJacobs', {
      url: '/arielajacobs',
      templateUrl: 'templates/arielaJacobs.html',
      controller: 'arielaJacobsCtrl'
    })





    .state('nAFASI', {
      url: '/nafasi',
      templateUrl: 'templates/nAFASI.html',
      controller: 'nAFASICtrl'
    })





    .state('thePublicOpinionSix', {
      url: '/thepublicopinionsix',
      templateUrl: 'templates/thePublicOpinionSix.html',
      controller: 'thePublicOpinionSixCtrl'
    })





    .state('theBrow', {
      url: '/thebrow',
      templateUrl: 'templates/theBrow.html',
      controller: 'theBrowCtrl'
    })





    .state('vendor1', {
      url: '/vendor1',
      templateUrl: 'templates/vendor1.html',
      controller: 'vendor1Ctrl'
    })





    .state('vendor2', {
      url: '/vendor2',
      templateUrl: 'templates/vendor2.html',
      controller: 'vendor2Ctrl'
    })





    .state('vendor3', {
      url: '/vendor3',
      templateUrl: 'templates/vendor3.html',
      controller: 'vendor3Ctrl'
    })





    .state('vendor4', {
      url: '/vendor4',
      templateUrl: 'templates/vendor4.html',
      controller: 'vendor4Ctrl'
    })





    .state('menu.photos', {
      url: '/photos',
      views: {
        'side-menu21': {
          templateUrl: 'templates/photos.html',
          controller: 'photosCtrl'
        }
      }
    })



    .state('fremantle_eventinfo', {
      url: '/fremantle_eventinfo',
      templateUrl: 'templates/fremantle_eventinfo.html',
      controller: 'fremantle_eventinfoCtrl'
    })


    .state('menu.socialMedia', {
      url: '/socialmedia',
      views: {
        'side-menu21': {
          templateUrl: 'templates/socialMedia.html',
          controller: 'socialMediaCtrl'
        }
      }
    })


    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/side-menu21/home');

});

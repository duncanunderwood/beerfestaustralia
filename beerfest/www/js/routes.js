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

    .state('melb_entertainment', {
          url: '/melb_entertainment',
          templateUrl: 'templates/melb_entertainment.html',
          controller: 'melb_entertainmentCtrl'
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

    .state('fremantle_stalls', {
      url: '/fremantle_stalls',
      templateUrl: 'templates/fremantle_stalls.html',
      controller: 'fremantle_stallsCtrl'
    })

    .state('fremantle_sitemap', {
      url: '/fremantle_sitemap',
      templateUrl: 'templates/fremantle_sitemap.html',
      controller: 'fremantle_sitemapCtrl'
    })

    .state('esk_eventinfo', {
      url: '/esk_eventinfo',
      templateUrl: 'templates/esk_eventinfo.html',
      controller: 'esk_eventinfoCtrl'
    })

    .state('esk_stalls', {
      url: '/esk_stalls',
      templateUrl: 'templates/esk_stalls.html',
      controller: 'esk_stallsCtrl'
    })

    .state('esk_sitemap', {
      url: '/esk_sitemap',
      templateUrl: 'templates/esk_sitemap.html',
      controller: 'esk_sitemapCtrl'
    })

    .state('melbourne_eventinfo', {
      url: '/melbourne_eventinfo',
      templateUrl: 'templates/melbourne_eventinfo.html',
      controller: 'melbourne_eventinfoCtrl'
    })

    .state('melbourne_stalls', {
      url: '/melbourne_stalls',
      templateUrl: 'templates/melbourne_stalls.html',
      controller: 'melbourne_stallsCtrl'
    })

    .state('melourne_sitemap', {
      url: '/melbourne_sitemap',
      templateUrl: 'templates/melbourne_sitemap.html',
      controller: 'melbourne_sitemapCtrl'
    })


    .state('esk_stall1', {
      url: '/esk_stall1',
      templateUrl: 'templates/esk_stall1.html',
      controller: 'esk_stall1Ctrl'
    })

    .state('esk_stall2', {
      url: '/esk_stall2',
      templateUrl: 'templates/esk_stall2.html',
      controller: 'esk_stall2Ctrl'
    })

    .state('esk_stall3', {
      url: '/esk_stall3',
      templateUrl: 'templates/esk_stall3.html',
      controller: 'esk_stall3Ctrl'
    })

    .state('esk_stall4', {
      url: '/esk_stall4',
      templateUrl: 'templates/esk_stall4.html',
      controller: 'esk_stall4Ctrl'
    })

    .state('esk_entertainment', {
      url: '/esk_entertainment',
      templateUrl: 'templates/esk_entertainment.html',
      controller: 'esk_entertainmentCtrl'
    })


    .state('melb_stall_2brothers', {
      url: '/melb_stall_2brothers',
      templateUrl: 'templates/melb_stall_2brothers.html',
      controller: 'melb_stall_2brothersCtrl'
    })

    .state('melb_stall_articfox', {
      url: '/melb_stall_articfox',
      templateUrl: 'templates/melb_stall_articfox.html',
      controller: 'melb_stall_articfoxCtrl'
    })

    .state('melb_stall_barrowboys', {
      url: '/melb_stall_barrowboys',
      templateUrl: 'templates/melb_stall_barrowboys.html',
      controller: 'melb_stall_barrowboysCtrl'
    })

    .state('melb_stall_blackheart', {
      url: '/melb_stall_blackheart',
      templateUrl: 'templates/melb_stall_blackheart.html',
      controller: 'melb_stall_blackheartCtrl'
    })

    .state('melb_stall_bright', {
      url: '/melb_stall_bright',
      templateUrl: 'templates/melb_stall_bright.html',
      controller: 'melb_stall_brightCtrl'
    })

    .state('melb_stall_cavalier', {
      url: '/melb_stall_cavalier',
      templateUrl: 'templates/melb_stall_cavalier.html',
      controller: 'melb_stall_cavalierCtrl'
    })

    .state('melb_stall_clarevalley', {
      url: '/melb_stall_clarevalley',
      templateUrl: 'templates/melb_stall_clarevalley.html',
      controller: 'melb_stall_clarevalleyCtrl'
    })

    .state('melb_stall_colonial', {
      url: '/melb_stall_colonial',
      templateUrl: 'templates/melb_stall_colonial.html',
      controller: 'melb_stall_colonialCtrl'
    })

    .state('melb_stall_craftrevolution', {
      url: '/melb_stall_craftrevolution',
      templateUrl: 'templates/melb_stall_craftrevolution.html',
      controller: 'melb_stall_craftrevolutionCtrl'
    })

    .state('melb_stall_custardandco', {
      url: '/melb_stall_custardandco',
      templateUrl: 'templates/melb_stall_custardandco.html',
      controller: 'melb_stall_custardandcoCtrl'
    })

    .state('melb_stall_dainton', {
      url: '/melb_stall_dainton',
      templateUrl: 'templates/melb_stall_dainton.html',
      controller: 'melb_stall_daintonCtrl'
    })

    .state('melb_stall_exit', {
      url: '/melb_stall_exit',
      templateUrl: 'templates/melb_stall_exit.html',
      controller: 'melb_stall_exitCtrl'
    })

    .state('melb_stall_feralbrewingco', {
      url: '/melb_stall_feralbrewingco',
      templateUrl: 'templates/melb_stall_feralbrewingco.html',
      controller: 'melb_stall_feralbrewingcoCtrl'
    })

    .state('melb_stall_flaminlamb', {
      url: '/melb_stall_flaminlamb',
      templateUrl: 'templates/melb_stall_flaminlamb.html',
      controller: 'melb_stall_flaminlambCtrl'
    })

    .state('melb_stall_fourbrothers', {
      url: '/melb_stall_fourbrothers',
      templateUrl: 'templates/melb_stall_fourbrothers.html',
      controller: 'melb_stall_fourbrothersCtrl'
    })

    .state('melb_stall_frankscider', {
      url: '/melb_stall_frankscider',
      templateUrl: 'templates/melb_stall_frankscider.html',
      controller: 'melb_stall_franksciderCtrl'
    })

    .state('melb_stall_hawkersbeer', {
      url: '/melb_stall_hawkersbeer',
      templateUrl: 'templates/melb_stall_hawkersbeer.html',
      controller: 'melb_stall_hawkersbeerCtrl'
    })

    .state('melb_stall_hawthornbrewingco', {
      url: '/melb_stall_hawthornbrewingco',
      templateUrl: 'templates/melb_stall_hawthornbrewingco.html',
      controller: 'melb_stall_hawthornbrewingcoCtrl'
    })

    .state('melb_stall_himmelhund', {
      url: '/melb_stall_himmelhund',
      templateUrl: 'templates/melb_stall_himmelhund.html',
      controller: 'melb_stall_himmelhundCtrl'
    })

    .state('melb_stall_hopnation', {
      url: '/melb_stall_hopnation',
      templateUrl: 'templates/melb_stall_hopnation.html',
      controller: 'melb_stall_hopnationCtrl'
    })

    .state('melb_stall_kaiju', {
      url: '/melb_stall_kaiju',
      templateUrl: 'templates/melb_stall_kaiju.html',
      controller: 'melb_stall_kaijuCtrl'
    })

    .state('melb_stall_kurbside', {
      url: '/melb_stall_kurbside',
      templateUrl: 'templates/melb_stall_kurbside.html',
      controller: 'melb_stall_kurbsideCtrl'
    })

    .state('melb_stall_lapala', {
      url: '/melb_stall_lapala',
      templateUrl: 'templates/melb_stall_lapala.html',
      controller: 'melb_stall_lapalaCtrl'
    })

    .state('melb_stall_melbpaellacompany', {
      url: '/melb_stall_melbpaellacompany',
      templateUrl: 'templates/melb_stall_melbpaellacompany.html',
      controller: 'melb_stall_melbpaellacompanyCtrl'
    })

    .state('melb_stall_moobaacluck', {
      url: '/melb_stall_moobaacluck',
      templateUrl: 'templates/melb_stall_moobaacluck.html',
      controller: 'melb_stall_moobaacluckCtrl'
    })

    .state('melb_stall_mrburger', {
      url: '/melb_stall_mrburger',
      templateUrl: 'templates/melb_stall_mrburger.html',
      controller: 'melb_stall_mrburgerCtrl'
    })

    .state('melb_stall_mrlittle', {
      url: '/melb_stall_mrlittle',
      templateUrl: 'templates/melb_stall_mrlittle.html',
      controller: 'melb_stall_mrlittleCtrl'
    })

    .state('melb_stall_napoleone', {
      url: '/melb_stall_napoleone',
      templateUrl: 'templates/melb_stall_napoleone.html',
      controller: 'melb_stall_napoleoneCtrl'
    })

    .state('melb_stall_piratelife', {
      url: '/melb_stall_piratelife',
      templateUrl: 'templates/melb_stall_piratelife.html',
      controller: 'melb_stall_piratelifeCtrl'
    })

    .state('melb_stall_pricklymoses', {
      url: '/melb_stall_pricklymoses',
      templateUrl: 'templates/melb_stall_pricklymoses.html',
      controller: 'melb_stall_pricklymosesCtrl'
    })

    .state('melb_stall_quietdeeds', {
      url: '/melb_stall_quietdeeds',
      templateUrl: 'templates/melb_stall_quietdeeds.html',
      controller: 'melb_stall_quietdeedsCtrl'
    })

    .state('melb_stall_redduck', {
      url: '/melb_stall_redduck',
      templateUrl: 'templates/melb_stall_redduck.html',
      controller: 'melb_stall_redduckCtrl'
    })

    .state('melb_stall_smoothbeard', {
      url: '/melb_stall_smoothbeard',
      templateUrl: 'templates/melb_stall_smoothbeard.html',
      controller: 'melb_stall_smoothbeardCtrl'
    })

    .state('melb_stall_soleillychee', {
      url: '/melb_stall_soleillychee',
      templateUrl: 'templates/melb_stall_soleillychee.html',
      controller: 'melb_stall_soleillycheeCtrl'
    })

    .state('melb_stall_southern', {
      url: '/melb_stall_southern',
      templateUrl: 'templates/melb_stall_southern.html',
      controller: 'melb_stall_southernCtrl'
    })

    .state('melb_stall_stgerrys', {
      url: '/melb_stall_stgerrys',
      templateUrl: 'templates/melb_stall_stgerrys.html',
      controller: 'melb_stall_stgerrysCtrl'
    })

    .state('melb_stall_temple', {
      url: '/melb_stall_temple',
      templateUrl: 'templates/melb_stall_temple.html',
      controller: 'melb_stall_templeCtrl'
    })

    .state('melb_stall_thatarancini', {
      url: '/melb_stall_thatarancini',
      templateUrl: 'templates/melb_stall_thatarancini.html',
      controller: 'melb_stall_thataranciniCtrl'
    })

    .state('melb_stall_threetroupers', {
      url: '/melb_stall_threetroupers',
      templateUrl: 'templates/melb_stall_threetroupers.html',
      controller: 'melb_stall_threetroupersCtrl'
    })

    .state('melb_stall_truebrew', {
      url: '/melb_stall_truebrew',
      templateUrl: 'templates/melb_stall_truebrew.html',
      controller: 'melb_stall_truebrewCtrl'
    })

    .state('melb_stall_twobirds', {
      url: '/melb_stall_twobirds',
      templateUrl: 'templates/melb_stall_twobirds.html',
      controller: 'melb_stall_twobirdsCtrl'
    })

    .state('melb_stall_twomen', {
      url: '/melb_stall_twomen',
      templateUrl: 'templates/melb_stall_twomen.html',
      controller: 'melb_stall_twomenCtrl'
    })

    .state('melb_stall_yelp', {
      url: '/melb_stall_yelp',
      templateUrl: 'templates/melb_stall_yelp.html',
      controller: 'melb_stall_yelpCtrl'
    })

    .state('melb_stall_younghenrys', {
      url: '/melb_stall_younghenrys',
      templateUrl: 'templates/melb_stall_younghenrys.html',
      controller: 'melb_stall_younghenrysCtrl'
    })


    .state('menu.extrainfo', {
      url: '/extrainfo',
      views: {
        'side-menu21': {
          templateUrl: 'templates/extrainfo.html',
          controller: 'extrainfoCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/side-menu21/home');

});

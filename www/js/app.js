// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at 
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
});

angular.module('app', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
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
})

.controller('TempCtrl', ['$scope', 'yelpAPI', function($scope, yelpAPI) {
    $scope.businesses = [];
    yelpAPI.getBusinessInfo('7136549424', function(data) {
        debugger;
        $scope.businesses = data.businesses;

    });

}])

.service('yelpAPI', function($http){
   return {
    "getBusinessInfo": function(phone, callback) {
      var method = 'GET';
      var url = 'http://api.yelp.com/v2/phone_search';//http://api.yelp.com/v2/phone_search?phone='+ phone +'&cc=US&category=restaurants
      var params = {
              callback: 'angular.callbacks._0',
              location: 'Houston',
              oauth_consumer_key: yelpAPIKey.consumerKey, //Consumer Key
              oauth_token: yelpAPIKey.token, //Token
              oauth_signature_method: "HMAC-SHA1",
              oauth_timestamp: new Date().getTime(),
              oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
              phone: phone,
              cc:'US',
              category:'restaurants'
          };
      var consumerSecret = yelpAPIKey.consumerSecret; //Consumer Secret
      var tokenSecret = yelpAPIKey.tokenSecret; //Token Secret
      var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
      params['oauth_signature'] = signature;
      $http.jsonp(url, {params: params}).success(callback);
    }
  }
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('start', {
      url: '/',
      templateUrl: '/start.html'
    })
    
    .state('locate', {
      url: '/locate',
      templateUrl: 'locate.html'
    })
    
    .state('result', {
      url: '/result',
      templateUrl: 'result.html'
    })
    
    .state('detail', {
      url: '/detail',
      templateUrl: 'detail.html'
    })
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/');
  

});
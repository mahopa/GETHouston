var Facility = function(id, type, name, address, phone, cuisine, inspections, rating){
  this.Id = id;
  this.FacilityType = type;
  this.Address = address;
  this.Name = name;
  this.Phone = phone;
  this.Cuisine = cuisine;
  this.Inspections = inspections;
  this.Rating = 0;
  this.Yelp = null;
}

app.service('facilityService', function($http){
  var facilities = [ ];
  var url = 'http://gethouston.azurewebsites.net/api/facility?address=lolwtf';
  /*var addFacility = function(callback){
      facilities.push(new Facility(3, "franchise", "name", "a place", "7136549424"));
      callback();
  };*/
   return {
      "getByLatLong": function(location, callback){
        //addFacility(callback);
        $http.get(url).success(function(res){
          facilities = res;
          facilities[0].Phone = "7136549424";
          callback();
        }).error(function(err){
            //errs
        });
        
        //return establishments;
      },
      "getByAddress":function(address, callback){
        //addFacility(callback)
        $http.get(url).success(function(res){
          facilities = res;
          callback();
        }).error(function(err){
            //errs
        });
      },
      "getInfo": function(){
        return facilities;
      },
      "getById":function(id){
        for (var i = facilities.length - 1; i >= 0; i--) {
          if(facilities[i].Id == id){
            return facilities[i];
          }
        }
        return null;
      }
    /*"getBusinessInfo": function(phone, callback) {
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
    }*/
  };
});
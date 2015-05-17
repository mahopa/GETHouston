app.filter('tel', function () {
    return function (tel) {
        if (!tel) { return ''; }

        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var country, city, number;

        switch (value.length) {
            case 10: // +1PPP####### -> C (PPP) ###-####
                country = 1;
                city = value.slice(0, 3);
                number = value.slice(3);
                break;

            case 11: // +CPPP####### -> CCC (PP) ###-####
                country = value[0];
                city = value.slice(1, 4);
                number = value.slice(4);
                break;

            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                city = value.slice(3, 5);
                number = value.slice(5);
                break;

            default:
                return tel;
        }

        if (country == 1) {
            country = "";
        }

        number = number.slice(0, 3) + '-' + number.slice(3);

        return (country + " (" + city + ") " + number).trim();
    };
})
.controller("detailController",
	['$scope', '$state', '$timeout', '$stateParams','yelpAPI',
		function($scope, $state, $timeout, $stateParams, $window, yelpAPI){
		// yelpAPI.getBusinessInfo('7136549424', function(data) {
		// 	debugger;
		//     $scope.businesses = data.businesses;
		// });
		$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
		if(1===0){
			$scope.inspectionRating = 100;
			$scope.inspectionRatingColor = "#1BB33F";
		}else if(2===0){
			$scope.inspectionRating = 50;
			$scope.inspectionRatingColor = "#FCA301";
		}
		else {
			$scope.inspectionRating = 5;
			$scope.inspectionRatingColor = "#FC0B01";
		}
		
		$scope.businessData = {
		   "is_claimed":false,
		   "rating":3,
		   "mobile_url":"http://m.yelp.com/biz/which-wich-houston-5",
		   "rating_img_url":"http://s3-media3.fl.yelpcdn.com/assets/2/www/img/34bc8086841c/ico/stars/v1/stars_3.png",
		   "review_count":22,
		   "name":"Which Wich",
		   "snippet_image_url":"http://s3-media2.fl.yelpcdn.com/photo/WEaaMgJN67_CwixWgqPe3Q/ms.jpg",
		   "rating_img_url_small":"http://s3-media3.fl.yelpcdn.com/assets/2/www/img/902abeed0983/ico/stars/v1/stars_small_3.png",
		   "url":"http://www.yelp.com/biz/which-wich-houston-5",
		   "menu_date_updated":1387683300,
		   "phone":"+17136549424",
		   "snippet_text":"Well I'm a fan of WhichWich, this is one of four WhichWich spots that I know of in the Downtown area. This one is actually in midtown on gray & bagby.\n\nSo...",
		   "image_url":"http://s3-media1.fl.yelpcdn.com/bphoto/td1Qwk4NGXp1qD-ySFqlTA/ms.jpg",
		   "categories":[
		      [
		         "Sandwiches",
		         "sandwiches"
		      ]
		   ],
		   "display_phone":"+1-713-654-9424",
		   "rating_img_url_large":"http://s3-media1.fl.yelpcdn.com/assets/2/www/img/e8b5b79d37ed/ico/stars/v1/stars_large_3.png",
		   "menu_provider":"single_platform",
		   "id":"which-wich-houston-5",
		   "is_closed":false,
		   "location":{
		      "city":"Houston",
		      "display_address":[
		         "510 Gray St",
		         "Downtown",
		         "Houston, TX 77002"
		      ],
		      "geo_accuracy":8,
		      "neighborhoods":[
		         "Downtown",
		         "Midtown",
		         "Fourth Ward"
		      ],
		      "postal_code":"77002",
		      "country_code":"US",
		      "address":[
		         "510 Gray St"
		      ],
		      "coordinate":{
		         "latitude":29.7510796,
		         "longitude":-95.3755798
		      },
		      "state_code":"TX"
		   }
		}
		//$scope.location = $stateParams.loc;
		//console.log(JSON.stringify($stateParams));
		$scope.openWindow = function(url){
			window.open(url, '_system', 'location=yes');
			return false;
		}
}]);
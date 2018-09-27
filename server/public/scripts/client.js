let app = angular.module('PetHotelApp', [ngRoute]);

app.config(['$routeProvider', function($routeProvider) {
  console.log('Route config it loaded');

  $routeProvider
    .when('/pet_hotel/owners', {
      templateUrl: 'views/owner.html',
      controller: 'OwnerController as vm'
    })
}])
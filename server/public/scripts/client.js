let app = angular.module('PetHotelApp', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', function ($routeProvider) {
  console.log('Route config it loaded');

  $routeProvider
    .when('/pet_hotel', {
      templateUrl: 'views/home.html',
    })
    .when('/pet_hotel/owners', {
      templateUrl: 'views/owner.html',
      controller: 'OwnerController as vm'
    })
    .when('/pet_hotel/pets', {
      templateUrl: 'views/pet.html',
      controller: 'PetController as vm'
    })
    .otherwise( { template: '<h1>404</h1>' });
}])

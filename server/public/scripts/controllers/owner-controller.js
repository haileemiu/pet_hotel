app.controller('OwnerController', ['$http', '$mdDialog', '$mdToast', function($http, $mdDialog, $mdToast) {
  console.log('OwnerController has been loaded');
  
  let self = this;

  self.ownerList = [];

  // Owner Get
  self.getOwners = function() {
    $http({
      method:'GET', 
      url: '/pet_hotel/owners'
    }).then((response) => {
      self.ownerList = response.data;
      console.log('OWNER GET RESPONSE:', response.data)
    }).catch((error) => {
      console.log('error making owner get request');
      alert('something when wrong owner controller get');
    })
  }
// Load owners on page load
self.getOwners();
}]);
app.controller('OwnerController', ['$http', '$mdDialog', '$mdToast', function($http, $mdDialog, $mdToast) {
  console.log('OwnerController has been loaded');
  
  let self = this;

  self.ownerList = [];

  // Owner GET
  self.getOwners = function() {
    $http({
      method:'GET', 
      url: '/pet_hotel/owners'
    }).then(function(response) {
      self.ownerList = response.data;
      console.log('OWNER GET RESPONSE:', response.data)
    }).catch(function(error) {
      console.log('error making owner get request', error);
      alert('something went wrong owner controller GET');
    })
  } // END GET

  // Owner DELETE
self.deleteOwner = function(ownerId) {
  console.log('clicked');
  $http({
    method: 'DELETE', 
    url: `/pet_hotel/owners/${ownerId}`
  }).then(function(response) {
    self.getOwners();
  }).catch(function(error) {
    console.log('ERROR in owner delete controller:', error);
    alert('Check your server!')
  })
} // end DELETE

// Load owners on page load
self.getOwners();
}]);
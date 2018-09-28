app.controller('OwnerController', ['$http', '$mdDialog', '$mdToast', function($http, $mdDialog, $mdToast) {
  console.log('OwnerController has been loaded');
  
  let self = this;

  self.ownerList = [];

  // Owner GET
  self.getOwners = function() {
    $http({
      method:'GET', 
      url: '/pet_hotel/owners'
    }).then((response) => {
      self.ownerList = response.data;
      console.log('OWNER GET RESPONSE:', response.data)
    }).catch((error) => {
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
  }).then((response) => {
    self.getOwners();
  }).catch((error)=> {
    console.log('ERROR in owner delete controller:', error);
    alert('Check your server!')
  })
} // end DELETE

// Load owners on page load
self.getOwners();
}]);
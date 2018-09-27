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

  // Owner Delete
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
}

// Load owners on page load
self.getOwners();
}]);
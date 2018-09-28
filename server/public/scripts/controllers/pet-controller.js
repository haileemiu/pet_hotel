app.controller('PetController', ['$http', '$mdDialog', '$mdToast', function($http, $mdDialog, $mdToast) {
  console.log('PetController has been loaded');

  let self = this;

  self.petList = [];

  // Pet GET
  self.getPets = function() {
    $http({
      method: 'GET', 
      url: '/pet_hotel/pets'
    }).then((response) => {
      self.petList = response.data;
      console.log('PET GET RESPONSE:', response.data)
    }).catch((error) => {
      console.log('error making pet get request', error)
      alert('something went wrong pet controller GET')
    })
  } // end GET

  // call on page load
  self.getPets();
}]) // end controller
app.controller('PetController', ['$http', '$mdDialog', '$mdToast', function ($http, $mdDialog, $mdToast) {
  console.log('PetController has been loaded');

  let self = this;

  self.petList = [];

  // Pet GET
  self.getPets = function () {
    $http({
      method: 'GET',
      url: '/pet_hotel/pets'
    }).then(function (response) {
      self.petList = response.data;
      console.log('PET GET RESPONSE:', response.data)
    }).catch(function(error) {
      console.log('error making pet get request', error)
      alert('something went wrong pet controller GET')
    })
  } // end GET

  // pet DELETE
  self.deletePet = function (petId) {
    console.log('clicked');
    $http({
      method: 'DELETE',
      url: `/pet_hotel/pets/${petId}`
    }).then(function(response) {
      console.log('pet delete response:', response)
      self.getPets();
    }).catch(function(error) {
      console.log('ERROR in pet delete controller:', error);
      alert('Check your server!')
    })
  } // end DELETE

  // Toggle checked in status
  self.toggleCheckedIn = function (petId) {
    //console.log('clicked toggle');
    $http({
      method: 'PUT', 
      url: `/pet_hotel/pets/${petId}`
    }).then(function(response){
      //console.log('/pets controller .then response:', response);
      self.getPets();
    }).catch(function(error) {
      //console.log('ERROR in /pets controller:', error);
      alert('Check your server!')
    })
  }

  // call on page load
  self.getPets();
}]) // end controller
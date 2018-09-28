app.controller('PetController', ['$http', '$mdDialog', '$mdToast', function ($http, $mdDialog, $mdToast) {
  console.log('PetController has been loaded');

  let self = this;

  self.petList = [];

  // Pet GET
  self.getPets = function () {
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

  // pet DELETE
  self.deletePet = function (petId) {
    console.log('clicked');
    $http({
      method: 'DELETE',
      url: `/pet_hotel/pets/${petId}`
    }).then((response) => {
      console.log('pet delete response:', response)
      self.getPets();
    }).catch((error) => {
      console.log('ERROR in pet delete controller:', error);
      alert('Check your server!')
    })
  } // end DELETE

  // call on page load
  self.getPets();
}]) // end controller
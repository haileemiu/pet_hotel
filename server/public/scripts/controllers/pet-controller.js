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

  // Add pet
  self.addPet = function(newPet) {
    $http({
      method:'POST', 
      url: `/pet_hotel/pets`, 
      data: newPet
    }).then(function(response) {
      // NEED TO ADD A WAY TO "EMPTY" 

      newPet.owner_id = null;
      newPet.name = '';
      newPet.breed = '';
      newPet.color = '';
      
      console.log('pet controller post response:', response);
      console.log('TEST', newPet);
      self.getPets();
      console.log('TEST', newPet);
    }).catch(function(error) {
      console.log('ERROR in pet controller post:', error)
    })
  }

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

  // call on page load
  self.getPets();
  // call owners for dropdown
  self.getOwners();
}]) // end controller
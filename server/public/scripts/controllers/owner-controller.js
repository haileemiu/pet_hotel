app.controller('OwnerController', ['$http', '$mdDialog', '$mdToast', function ($http, $mdDialog, $mdToast) {
  console.log('OwnerController has been loaded');

  let self = this;

  // Owner GET
  self.getOwners = function () {
    $http({
      method: 'GET',
      url: '/pet_hotel/owners'
    }).then(function (response) {
      self.ownerList = response.data;
      console.log('OWNER GET RESPONSE:', response.data)
    }).catch(function (error) {
      console.log('error making owner get request', error);
      alert('something went wrong owner controller GET');
    })
  } // END GET

  // Owner DELETE
  self.deleteOwner = function (owner) {
    if (owner.number_of_pets == 0) {
      $http({
        method: 'DELETE',
        url: `/pet_hotel/owners/${owner.id}`
      }).then(function (response) {
        $mdToast.show(
          $mdToast.simple().textContent('Owner has been deleted.')
        )
        self.getOwners();
      }).catch(function (error) {
        console.log('ERROR in owner delete controller:', error);
      })
    } else {
      $mdToast.show(
        $mdToast.simple().textContent('Owner can not be deleted if they still have pets.')
      )
    }

  } // end DELETE

  // Add owner
  self.addOwner = function (newOwner) {
    // Toast on add
    $mdToast.show(
      $mdToast.simple().textContent('Owner has been added.')
    )
    $http({
      method: 'POST',
      url: `/pet_hotel/owners`,
      data: newOwner
    }).then(function (response) {
      newOwner.first_name = '';
      newOwner.last_name = '';
      console.log('owner controller post response:', response);
      self.getOwners();
    }).catch(function (error) {
      console.log('ERROR owner controller post:', error);
    })
  }

  // Load owners on page load
  self.getOwners();
}]);
app.controller('HistoryController', ['$http', '$mdDialog', '$mdToast', function($http, $mdDialog, $mdToast) {
  console.log('HistoryController has been loaded');

  let self = this;

  self.historyList = [];

  self.getHistory = function() {
    $http({
      method: 'GET', 
      url: '/pet_hotel/history'
    }).then(function (response) {
      self.historyList = response.data;
      console.log('self.historyList:', self.historyList);

      response.data.forEach(pet => {
        pet.check_in_pretty_date = new Date(pet.last_check_in).toLocaleDateString(navigator.language)
      });

      response.data.forEach(pet => {
        pet.check_out_pretty_date = new Date(pet.last_check_out).toLocaleDateString(navigator.language)
      });

    }).catch(function(error) {
      console.log('ERROR making history GET:', error);
      alert('Something went wrong in history controller');
    })
  }
  // call on page load
  self.getHistory();
}]);
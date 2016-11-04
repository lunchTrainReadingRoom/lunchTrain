/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;
(function () {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

  MainController.$inject = ['LocalStorage', 'QueryService', '$scope'];


  function MainController(LocalStorage, QueryService, $scope) {

    // 'controller as' syntax
    var self = this;
    
    $scope.train = {};

    $scope.trains = [];
    $scope.addContact = function(cond, dest, time) {
      
      $scope.trains.push({
        conductor: cond,
        destination: dest,
        time: time
      });
      console.log($scope.trains);

    };




    ////////////  function definitions


    /**
     * Load some data
     * @return {Object} Returned object
     */
     QueryService.query('GET', 'posts', {}, {})
       .then(function(res) {
         self.res = res.data;
       });
  }


})();
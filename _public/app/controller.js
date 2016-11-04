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

    function getData(postGet) {
      console.log("running");
      QueryService.query('GET', 'train/getAll', {}, {})
        .then(function(res) {
        console.log(res);
        $scope.res = res.data;
        for (var i = 0; i < $scope.res.length; i++) {

          $scope.trains.push($scope.res[i]);
          console.log($scope.res[i]);
        }
        if (postGet === true) {
          console.log("fbeiubfwe");
          $scope.$digest();
        }

      });
    }
    getData();

    $scope.addContact = function(cond, dest, time, notes) {
      console.log("hello");
      QueryService.query('POST', 'train/add', {
        conductor: cond,
        destination: dest,
        time: time,
      })
        .then(function(res) {
        
        console.log("running get Data");
        
        self.res = res.data;
        
      });
      
      $scope.trains = [];

      getData(true);

    };




    ////////////  function definitions


    /**
     * Load some data
     * @return {Object} Returned object
     */

    //    function query(method, url, params, data)


  }


})();

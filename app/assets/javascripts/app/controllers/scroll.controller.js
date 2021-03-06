(function() {


  angular
    .module('meditation')
    .controller('ScrollController', function($rootScope, $location, anchorSmoothScroll) {

        $rootScope.gotoElement = function (eID){
          console.log(eID)
          // set the location.hash to the id of
          // the element you wish to scroll to.
          $location.hash(eID);

          // call $anchorScroll()
          anchorSmoothScroll.scrollTo(eID);

        };
      });
}())

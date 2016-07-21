(function () {

  angular.module('myCalculator')
    .component('additionComponent', {
      templateUrl: 'app/components/calculator/addition/addition.html',
      controller: AdditionController,
      bindings: {
        bwa: '<',
        formula: '<'
      }
    })

  function AdditionController() {
    // this.testing = 123;

  }

} ())
(function () {

    angular.module('myCalculator')
        .component('divideComponent', {
            templateUrl: 'app/components/calculator/divide/divide.html',
            controller: DivideController,
            bindings: {
                bwa: '<',
                formula: '<'
            }
        })

    function DivideController() {
        // this.testing = 123;

    }

} ())
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
var dc = this;
    }

} ())
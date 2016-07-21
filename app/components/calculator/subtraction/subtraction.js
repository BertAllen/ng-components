(function () {

    angular.module('myCalculator')
        .component('subtractionComponent', {
            templateUrl: 'app/components/calculator/subtraction/subtraction.html',
            controller: SubtractionController,
            bindings: {
                bwa: '<',
                formula: '<'
            }
        })

    function SubtractionController() {
var sc=this;
    }

} ())
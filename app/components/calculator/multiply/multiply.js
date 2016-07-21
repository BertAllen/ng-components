(function () {

    angular.module('myCalculator')
        .component('multiplyComponent', {
            templateUrl: 'app/components/calculator/multiply/multiply.html',
            controller: MultiplyController,
            bindings: {
                bwa: '<',
                formula: '<'
            }
        })

    function MultiplyController() {
        // this.testing = 123;

    }

} ())
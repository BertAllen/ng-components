(function () {

  angular.module('myCalculator')
    .component('calculatorComponent', {
      templateUrl: 'app/components/calculator/calculator.html',
      controller: CalculatorController
    })

  function CalculatorController() {
    var cc = this
    this.myFavNum = 43 - 1;

    this.addX = function (x) {
      // debugger
      if(x==undefined){
        alert("Please input a number before attempting this operation.");
        return;
      }
      cc.myFavNum += x;
    }

    this.subtractX = function (x) {
       if(x==undefined){
        alert("Please input a number before attempting this operation.");
        return;
      }
      cc.myFavNum -= x;
    }

    this.multiplyX = function (x) { 
      if(x==undefined){
        alert("Please input a number before attempting this operation.");
        return;
      }
      cc.myFavNum *= x;
    }

    this.divideX = function (x) {
       if(x==undefined){
        alert("Please input a number before attempting this operation.");
        return;
      }
      if (x) {
        cc.myFavNum /= x;
      } else {
        alert("I cannot divide by zero, please choose another number.");
        return;
      }
    }

  }

} ())
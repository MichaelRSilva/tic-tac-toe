/**
 * Created by michaeldfti on 21/02/17.
 */

angular
    .module('TicTacToe')
    .directive('choosePlayerNumber', choosePlayerNumber);

choosePlayerNumber.$inject = [];


function choosePlayerNumber() {

    var directive = {
        link: link,
        restrict: 'EA',
        templateUrl: './app/components/home/directives/choose-player-number/choose-player-number-directive.html'
    };

    return directive;

    function link($scope, element, attrs) {


    }
}
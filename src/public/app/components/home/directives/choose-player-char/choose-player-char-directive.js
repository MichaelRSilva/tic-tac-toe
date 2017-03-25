/**
 * Created by michaeldfti on 21/02/17.
 */

angular
    .module('TicTacToe')
    .directive('choosePlayerChar', choosePlayerChar);

choosePlayerChar.$inject = [];


function choosePlayerChar() {

    var directive = {
        link: link,
        restrict: 'EA',
        templateUrl: './app/components/home/directives/choose-player-char/choose-player-char-directive.html'
    };

    return directive;

    function link($scope, element, attrs) {


    }
}
/**
 * Created by michaeldfti on 21/02/17.
 */

angular
    .module('TicTacToe')
    .directive('endGame', endGame);

endGame.$inject = [];


function endGame() {

    var directive = {
        link: link,
        restrict: 'EA',
        templateUrl: './app/components/home/directives/end-game/end-game-directive.html'
    };

    return directive;

    function link($scope, element, attrs) {


    }
}
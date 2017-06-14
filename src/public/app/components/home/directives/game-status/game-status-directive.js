/**
 * Created by michaeldfti on 21/02/17.
 */

angular
    .module('TicTacToe')
    .directive('gameStatus', gameStatus);

gameStatus.$inject = [];


function gameStatus() {

    var directive = {
        link: link,
        restrict: 'EA',
        templateUrl: './app/components/home/directives/game-status/game-status-directive.html',
        scope: {
            gameTableShow            : '=',
            scoreP1                  : '=',
            scoreP2                  : '=',
            charP1                   : '=',
            charP2                   : '='
        }
    };

    return directive;

    function link(scope, element, attrs) {

        scope.formatScore = function(number){
            return parseInt(number) < 10 ? "0"+number : number;
        };

    }
}
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
        templateUrl: './app/components/home/directives/choose-player-char/choose-player-char-directive.html',
        scope: {
            playersNumber                   : '=',
            charP1                          : '=',
            charP2                          : '=',
            backPage                        : '&',
            nextPage                        : '&',
            choosePlayerCharShow            : '='
        }
    };

    return directive;

    function link(scope, element, attrs) {

        scope.selectPlayerChar = function (value) {
            scope.charP1 = value;
            scope.charP2 = scope.charP1 == 'c1' ? 'c2' : 'c1';
            scope.nextPage();
        };

    }
}
/**
 * Created by michaeldfti on 21/02/17.
 */

angular
    .module('TicTacToe')
    .directive('endGame', endGame);

endGame.$inject = ['$timeout'];


function endGame($timeout) {

    var directive = {
        link: link,
        restrict: 'EA',
        templateUrl: './app/components/home/directives/end-game/end-game-directive.html',
        scope: {
            beforePage                 : '&',
            endGameShow                : '=',
            hasWinner                  : '=',
            charWinner                 : '='
        }
    };

    return directive;

    function link(scope, element, attrs) {

        scope.$watch('hasWinner', function() {

            if(scope.hasWinner){
                $timeout(function () {
                    scope.hasWinner     = false;
                    scope.charWinner    = '';
                    scope.beforePage();
                }, 4000);
            }

        });

    }
}
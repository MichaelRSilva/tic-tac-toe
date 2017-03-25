/**
 * Created by michaeldfti on 21/02/17.
 */

angular
    .module('TicTacToe')
    .directive('gameTable', gameTable);

gameTable.$inject = [];


function gameTable() {

    var directive = {
        link: link,
        restrict: 'EA',
        templateUrl: './app/components/home/directives/game-table/game-table-directive.html'
    };

    return directive;

    function link($scope, element, attrs) {


    }
}
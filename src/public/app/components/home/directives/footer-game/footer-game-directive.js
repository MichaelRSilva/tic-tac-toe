/**
 * Created by michaeldfti on 21/02/17.
 */

angular
    .module('TicTacToe')
    .directive('footerGame', footerGame);

footerGame.$inject = [];


function footerGame() {

    var directive = {
        link: link,
        restrict: 'EA',
        templateUrl: './app/components/home/directives/footer-game/footer-game-directive.html'
    };

    return directive;

    function link($scope, element, attrs) {


    }
}
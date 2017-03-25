/**
 * Created by michaeldfti on 21/02/17.
 */

angular
    .module('TicTacToe')
    .controller('homeController', homeController);

homeController.$inject = ['$scope'];

function homeController($scope) {

    $scope.gameTableShow            = false;
    $scope.gameStatusShow           = false;
    $scope.footerGameShow           = false;
    $scope.choosePlayerNumberShow   = false;
    $scope.choosePlayerCharShow     = false;
    $scope.endGameShow              = false;


}

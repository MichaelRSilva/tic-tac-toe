/**
 * Created by michaeldfti on 21/02/17.
 */

angular
    .module('TicTacToe')
    .controller('homeController', homeController);

homeController.$inject = ['$scope'];

function homeController($scope) {

    /**
     * Sections
     */
    $scope.gameTableShow            = false;
    $scope.gameStatusShow           = false;
    $scope.footerGameShow           = false;
    $scope.choosePlayerNumberShow   = true;
    $scope.choosePlayerCharShow     = false;
    $scope.endGameShow              = false;


    /**
     * Game Options
     */
    $scope.playersNumber            = 0;


    /**
     * Pages controls
     */
    $scope.showChooseCharPage = function(){
        $scope.hideAllPages();
        $scope.choosePlayerCharShow     = true;
    };

    $scope.showChooseNumberPage = function(){
        $scope.hideAllPages();
        $scope.choosePlayerNumberShow   = true;
    };

    $scope.hideAllPages = function () {
        $scope.gameTableShow            = false;
        $scope.gameStatusShow           = false;
        $scope.footerGameShow           = false;
        $scope.choosePlayerNumberShow   = false;
        $scope.choosePlayerCharShow     = false;
        $scope.endGameShow              = false;
    };

}
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
    $scope.choosePlayerNumberShow   = true;
    $scope.choosePlayerCharShow     = false;
    $scope.endGameShow              = false;
    $scope.scoreP1                  = 0;
    $scope.scoreP2                  = 0;


    /**
     * Game options
     */
    $scope.playersNumber            = 0;
    $scope.charP1                   = '';
    $scope.charP2                   = '';
    $scope.hasWinner                = false;
    $scope.charWinner               = '';


    /**
     * Game controls
     */
    $scope.addScore = function(player){
        $scope["score" + player.toUpperCase()] += 1;
    };

    $scope.resetScore = function(){
        $scope.scoreP1 = 0;
        $scope.scoreP2 = 0;
    };


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

    $scope.showGameTable = function(){
        $scope.hideAllPages();
        $scope.gameTableShow            = true;
    };

    $scope.showEndGame = function(){
        $scope.hideAllPages();
        $scope.endGameShow              = true;
    };


    $scope.hideAllPages = function () {
        $scope.gameTableShow            = false;
        $scope.choosePlayerNumberShow   = false;
        $scope.choosePlayerCharShow     = false;
        $scope.endGameShow              = false;
    };

    $scope.newGame = function () {
        $scope.resetGameState();
    };

    $scope.resetGameState = function () {
        $scope.gameState                = [['','',''], ['','',''], ['','','']];
        $scope.gameStateWin             = [[false,false,false], [false,false,false], [false,false,false]];
    };

    $scope.resetAll = function () {
        $scope.hideAllPages();
        $scope.resetScore();
        $scope.resetGameState();

        $scope.choosePlayerNumberShow   = true;
        $scope.playersNumber            = 0;
        $scope.playerOne                = '';
    };

    /**
     * Initials process
     */
    $scope.resetGameState();

}
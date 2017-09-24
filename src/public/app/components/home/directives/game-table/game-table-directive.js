/**
 * Created by michaeldfti on 21/02/17.
 */

angular
    .module('TicTacToe')
    .directive('gameTable', gameTable);

gameTable.$inject = ['$timeout'];


function gameTable($timeout) {

    var directive = {
        link: link,
        restrict: 'EA',
        templateUrl: './app/components/home/directives/game-table/game-table-directive.html',
        scope: {
            playersNumber            : '=',
            charP1                   : '=',
            charP2                   : '=',
            gameTableShow            : '=',
            gameState                : '=',
            hasWinner                : '=',
            charWinner               : '=',
            gameStateWin             : '=',
            addScore                 : '&',
            nextPage                 : '&',
            resetGameState           : '&'
        }
    };

    return directive;

    function link(scope, element, attrs) {

        /**
         * States
         */
        scope.currentPlayer    = '';
        scope.countMovements   = 0;
        scope.gameTableBlocked = false;


        /**
         * Methods
         */
        scope.selectCell = function (row, col) {
            var winner;

            if(scope.gameState[row][col] == '' && !scope.hasWinner && !scope.gameTableBlocked){

                scope.gameState[row][col] = scope["char" + scope.currentPlayer.toUpperCase()];
                winner                    = scope.getWinner();
                scope.countMovements++;

                if(winner){
                    scope.hasWinner  = true;
                    scope.charWinner = winner;
                    scope._addScore(scope.currentPlayer);

                    $timeout(function () {
                        scope.countMovements = 0;
                        scope.nextPage();
                        scope.resetGameState();
                    }, 2000);

                }else{

                    if(scope.countMovements == 9){
                        scope.hasWinner  = true;
                        scope.charWinner = null;

                        $timeout(function () {
                            scope.countMovements = 0;
                            scope.nextPage();
                            scope.resetGameState();
                        }, 2000);
                    }else{
                        scope.setCurrentPlayer();
                        scope.playComputerPlayer();
                    }

                }
            }
        };

        scope.getWinner = function () {

            var gs = scope.gameState;
            var winnerCol;
            var winnerLine;
            var winnerDiagonal;
            var c = scope["char" + scope.currentPlayer.toUpperCase()];

            function checkCols(){
                for(var i=0; i<3; i++){
                    if(c == gs[0][i] && c == gs[1][i] && c == gs[2][i]){
                        scope.gameStateWin[0][i] = true;
                        scope.gameStateWin[1][i] = true;
                        scope.gameStateWin[2][i] = true;

                        return c;
                    }
                }
                return false;
            }

            function checkLines(){
                for(var i=0; i<3; i++){
                    if(c == gs[i][0] && c == gs[i][1] && c == gs[i][2]){
                        scope.gameStateWin[i][0] = true;
                        scope.gameStateWin[i][1] = true;
                        scope.gameStateWin[i][2] = true;

                        return c;
                    }
                }
                return false;
            }

            function checkDiagonal(){
                if(c == gs[0][0] && c == gs[1][1] && c == gs[2][2]){
                    scope.gameStateWin[0][0] = true;
                    scope.gameStateWin[1][1] = true;
                    scope.gameStateWin[2][2] = true;

                    return c;
                }else{
                    if(c == gs[0][2] && c == gs[1][1] && c == gs[2][0]){
                        scope.gameStateWin[0][2] = true;
                        scope.gameStateWin[1][1] = true;
                        scope.gameStateWin[2][0] = true;

                        return c;
                    }
                }
                return false;
            }

            winnerCol       = checkCols();
            winnerLine      = checkLines();
            winnerDiagonal  = checkDiagonal();

            if(winnerCol) return winnerCol;
            if(winnerLine) return winnerLine;
            if(winnerDiagonal) return winnerDiagonal;

            return false;

        };

        scope.setCurrentPlayer = function () {
            scope.currentPlayer = scope.currentPlayer != 'p1' ? 'p1' : 'p2';
        };

        scope.playComputerPlayer = function () {
            if(scope.playersNumber == 1 && scope.currentPlayer == 'p2'){
                scope.blockGameTable();

                // TODO: AUTO PLAY TO IMPLEMENT
                $timeout(function () {
                    //
                    //
                    //
                    scope.unblockGameTable();
                }, 2000);
            }
        };

        scope.blockGameTable = function () {
            scope.gameTableBlocked = true;
        };

        scope.unblockGameTable = function () {
            scope.gameTableBlocked = false;
        };

        scope._addScore = function (player) {
            scope.addScore({player: player});
        };


        /**
         * Initials run
         */
        scope.setCurrentPlayer();

    }
}
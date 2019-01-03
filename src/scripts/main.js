import {
    Board
} from "./Board.js";

// assignments
var canvas = document.querySelector("canvas");
var brush = canvas.getContext("2d");
var board = new Board(10);

// fit canvas to screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


animate();

inputController = new InitialInputController();
InitialInputController.setEventListeners(inputController);

function animate() {
    requestAnimationFrame(animate);

    // start updating generation when start button pressed
    board.updateGeneration();

    board.draw();
}



//________________
// Controller
// we start with blank board
// mouseclick listener >> gets position >> converts position to corresponding row and column of board
// position passed to controller 
// controller sets the state at position to alive
class InitialInputController {
    static setEventListeners(inputController) {
        // set mouseclick controller
        window.addEventListener("click", function (event) {
            var x = event.x;
            var y = event.y;

            inputController.setTileToAlive(event.x, event.y), board;
        })
    }


    setTileToAlive(x, y, board) {
        var row = Math.floor(x / board.tileSize);
        var column = Math.floor(y / board.tileSize);
        board.set
    }
}
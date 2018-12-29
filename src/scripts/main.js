import { Board } from "./Board.js";

// assignments
var canvas = document.querySelector("canvas");
var brush = canvas.getContext("2d");
var board = new Board(2);

// fit canvas to screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

animate();

function animate() {
    requestAnimationFrame(animate);
    board.updateGeneration();
    board.draw();
}


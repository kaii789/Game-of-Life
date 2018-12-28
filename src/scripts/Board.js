// constructor helper
function _generateTiles(tileSize) {
    // based off tileSize, generate the appropriate number of tiles
    var rows = Math.floor(window.innerHeight / tileSize);
    var columns = Math.floor(window.innerHeight / tileSize);
    var tiles = new Array();
    for (var i = 0; i < rows; i++) {
        var row = new Array();
        for (var j = 0; j < columns; j++) {
            row.push(0);
        }
        tiles.push(row);
    }

    return tiles;
}
export class Board {
    constructor(tileSizePx) {
        this.tileSize = tileSizePx;
        this.tiles = _generateTiles(this.tileSize);
    }

    updateGeneration() {
        // iterate through tiles
        // for a given tile, if alive, check num of alive neighbors >> if not 2 or 3 alive neighbors, then dead in next gen
        // if dead, if 3 alive neighbors, alive in next gen

        // for (var i = 0)
    }

    draw() {
        var canvas = document.querySelector("canvas");
        var brush = canvas.getContext("2d");
    
        for (var tileRow in this.tiles) {
            for (var tileColumn in this.tiles[tileRow]) {
                tileState = this.tiles[tileRow][tileColumn];
                brush.beginPath();
                brush.fillStyle = "black";
                brush.fillRect(tileColumn, tileRow, this.tileSize, this.tileSize);
            }

        }


    }
}


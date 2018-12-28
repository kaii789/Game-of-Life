// constructor helper
function _generateTiles(tileSize) {
    // based off tileSize, generate the appropriate number of tiles
    var rows = Math.floor(window.innerHeight / tileSize);
    var columns = Math.floor(window.innerWidth / tileSize);
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

        // for (var tileRow in this.tiles) {
        //     for (var tileColumn in this.tiles[tileRow]) {
        //         var tileState = this.tiles[tileRow][tileColumn];
        //         var neighbors = _getNeighbors(tileRow, tileColumn);
        //         if (tileState == 0) {
        //             // tile dead
        //         } else {

        //         }



        //     }
        // }

    }

    _getNeighbors(tileRow, tileColumn) {

    }

    draw() {
        var canvas = document.querySelector("canvas");
        var brush = canvas.getContext("2d");

        for (var tileRow in this.tiles) {
            for (var tileColumn in this.tiles[tileRow]) {
                var tileState = this.tiles[tileRow][tileColumn];
                brush.beginPath();
                if (tileState == 0) brush.fillStyle = "black"; else brush.fillStyle = "white";
                brush.fillRect(tileColumn * this.tileSize, tileRow * this.tileSize, this.tileSize, this.tileSize);
            }

        }


    }
}
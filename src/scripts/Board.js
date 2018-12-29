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

        for (var tileRow in this.tiles) {
            for (var tileColumn in this.tiles[tileRow]) {
                var tileState = this.tiles[tileRow][tileColumn];
                var neighbors = this._getNeighbors(tileRow, tileColumn);
                if (tileState == 0) this._handleDeadState(tileRow, tileColumn, neighbors);
                else this._handleAliveState(tileRow, tileColumn, neighbors);
            }
        }
    }

    _getNeighbors(tileRow, tileColumn) {
        var neighbors = new Array();
        _addAdjacent(tileRow, tileColumn);
        _addDiagonals(tileRow, tileColumn);
    }

    _addAdjacent(tileRow, tileColumn) {
        if (tileColumn != 0) {
            // add left
            neighbors.push(this.tiles[tileRow][tileColumn - 1]);
        }

        if (tileColumn != this.tiles[0].length - 1) {
            // add right
            neighbors.push(this.tiles[tileRow][tileColumn + 1]);
        }

        if (tileRow != 0) {
            // add top
            neighbors.push(this.tiles[tileRow - 1][tileColumn]);
        }

        if (!(tileRow == this.tiles.length - 1)) {
            // add bottom
            neighbors.push(this.tiles[tileRow + 1][tileColumn]);
        }
    }

    _addDiagonals(tileRow, tileColumn) {
        if (tileColumn != 0 && tileRow != 0) {
            neighbors.push(this.tiles[tileRow - 1][tileColumn - 1]);
        }

        if (tileColumn != 0 && tileRow != this.tiles.length - 1) {
            neighbors.push(this.tiles[tileRow + 1][tileColumn - 1]);
        }

        if (tileColumn != this.tiles[0].length - 1 && tileRow != this.tiles.length - 1) {
            neighbors.push(this.tiles[tileRow + 1][tileColumn + 1]);
        }

        if (tileColumn != this.tiles[0].length - 1 && tileRow != 0) {
            neighbors.push(this.tiles[tileRow - 1][tileColumn + 1]);
        }
    }


    _handleDeadState(tileRow, tileColumn, neighbors) {
        if (checkLiveNeighbors(3, neighbors)) this.tiles[tileRow][tileColumn] = 1;
    }

    _handleAliveState(tileRow, tileColumn, neighbors) {
        var twoNeighborsAlive = checkLiveNeighbors(2, neighbors);
        var threeNeighborsAlive = checkLiveNeighbors(3, neighbors);
        if (!twoNeighborsAlive && !threeNeighborsAlive) this.tiles[tileRow][tileColumn] = 0;
    }

    draw() {
        var canvas = document.querySelector("canvas");
        var brush = canvas.getContext("2d");

        for (var tileRow in this.tiles) {
            for (var tileColumn in this.tiles[tileRow]) {
                var tileState = this.tiles[tileRow][tileColumn];
                brush.beginPath();
                if (tileState == 0) brush.fillStyle = "black";
                else brush.fillStyle = "white";
                brush.fillRect(tileColumn * this.tileSize, tileRow * this.tileSize, this.tileSize, this.tileSize);
            }
        }
    }



}


/*
TODO
-need to handle resizing
*/
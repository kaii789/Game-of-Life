export class Board {
    constructor(tileSizePx) {
        this.tileSize = tileSizePx;
        this.tiles = this.generateTiles();
    }

    generateTiles() {
        // based off tileSize, generate the appropriate number of tiles
        var rows = Math.floor(window.innerHeight / this.tileSize);
        var columns = Math.floor(window.innerHeight / this.tileSize);
        var tiles = new Array();
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                tiles[i][j] = 0;
            }
        }

        return tiles;
    }

    updateGeneration() {
        // iterate through tiles
            // for a given tile, if alive, check num of alive neighbors >> if not 2 or 3 alive neighbors, then dead in next gen
            // if dead, if 3 alive neighbors, alive in next gen
        
        // for (var i = 0)
    }

    draw() {

    }
}


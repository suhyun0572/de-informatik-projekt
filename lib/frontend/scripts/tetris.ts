export module Tetris {
enum TetrisBlockType {
    IBLOCK = 0,
    JBLOCK,
    LBLOCK,
    OBLOCK,
    SBLOCK,
    TBLOCK,
    ZBLOCK,
    TETRIS_BLOCK_END
};

/**
 * Represents a 2D shape
 */
export class Shape {
    constructor(readonly shape:boolean[][]) {}
}

export const TETRIS_SHAPE_DEFINITION : Shape[] = [
    // I block
    new Shape([[true, true, true, true]]),
    // J block
    new Shape([[true, false, false],
               [true, true, true]]),
    // L block
    new Shape([[false, false, true],
               [true, true, true]]),
    // O block
    new Shape([[true, true],
               [true, true]]),
    // S block
    new Shape([[false, true, true],
               [true, true, false]]),
    // T block
    new Shape([[false, true, false],
               [true, true, true]]),
    // Z block
    new Shape([[true, true, false],
               [false, true, true]]),
];

// The plane described in tetris is 20x10 size grid.
type XCoord = 0|1|2|3|4|5|6|7|8|9;
type YCoord = 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19;
export class Coord {
    x: XCoord;
    y: YCoord;
    constructor(x: XCoord, y:YCoord) {
        this.x = x;
        this.y = y;
    }
}
/**
 * To describe an object in a plane.
 */
export class PlaneObject {
    coord : Coord
    constructor(readonly shape, coord: Coord) {
        this.coord = coord;
    }
}
export class GamePlane {
    public constructor(readonly objects : PlaneObject[] = []) {}
    public addObjectAtTop(shape :Shape) {
        this.objects.push(new PlaneObject(shape, new Coord(1, 19)));
    }
    /**
     * Make all objects fall one grid, and if any of the object reaches
     * the ground, remove the object.
     */
    fall() {
        for (let i = 0 ; i < this.objects.length; ++i) {
            const currObject = this.objects[i];
            // Simply Remove object when it reaches the ground
            if (currObject.coord.y <= 1) {
                this.objects.splice(i, 1);
                --i;
                continue;
            }
            --currObject.coord.y;
        }
    }
}

/**
 * A wrapper class to actually draw the canvas
 */
export class CanvasPlane {
    constructor(readonly canvas: HTMLCanvasElement, readonly plane : GamePlane = new GamePlane()) {

    }
    draw () {
        const ctxt = this.canvas.getContext('2d');
        ctxt.fillRect(0, 0, 150, 75);
    }
}

}
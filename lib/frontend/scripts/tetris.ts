

enum TetrisBlockType {
    IBLOCK = 0,
    JBLOCK,
    LBLOCK,
    OBLOCK,
    SBLOCK,
    TBLOCK,
    ZBLOCK
};

/**
 * Represents a 2D shape
 */
class Shape {
    shapeRep : boolean[][];
    constructor(shape:boolean[][]) {
        this.shapeRep = shape;
    }
    /**
     * Rotate this shape 
     */
    rotate(clockwise:boolean) : void {

    }
}

const SHAPE_DEFINITION : Shape[] = [
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

const GAME_CANVAS_ID = 'gameRoom';
/**
 * Empty whatever's in the body of the html and return the body element
 */
function emptyBody() : HTMLElement {
    const body = document.getElementById("body");
    while (body.lastElementChild) {
        body.removeChild(body.lastElementChild);
    }
    return body;
}
/**
 * Create a game room canvas and replace the HTML body with it
 */
function displayGameRoom(){
    function createCenterCanvas() : HTMLElement {
        const center = document.createElement('center');
        const canvas = document.createElement('canvas');
        canvas.setAttribute('class', GAME_CANVAS_ID);
        canvas.setAttribute('id', GAME_CANVAS_ID);
        center.appendChild(canvas);
        return center;
    }
    const body = emptyBody();
    const canvas = createCenterCanvas();
    body.appendChild(canvas);
}

/**
 * Display and start drawing random stuff on the canvas.
 */
function starter() {
    displayGameRoom();

}
window.onload = starter;
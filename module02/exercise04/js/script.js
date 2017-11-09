var selected = null;    // elements to be moved
var oldMouseX, oldMouseY;   //stores x and y coordinates of the mouse pointer
var elemX, elemY;

function init() {
    var dragMe = document.querySelector('#dragMe');
    dragMe.onmousedown = dragInit;
    window.onmousemove = moveElem;
    window.onmouseup = stopMovingElem;
}

function dragInit(evt) {
    // Store the elem
    selected = evt.target;
    elemX = selected.offsetLeft;
    elemY = selected.offsetTop;

    oldMouseX = evt.clientX;
    oldMouseY = evt.clientY;
}

function moveElem(evt) {
    var newMouseX = evt.clientX;
    var newMouseY = evt.clientY;

    if (oldMouseX !== undefined) {
        // how many pixels did we move the mouse?
        var dx = newMouseX - oldMouseX;
        var dy = newMouseY - oldMouseY;
    }

    if (selected !== null) {
        // move the selected element dx, dy pixels horizontally/vertically
        // update the old position of the selected element
        elemX += dx;
        elemY += dy;
        // change the pos on the screen of the element
        // by modifying its CSS left/top properties
        selected.style.left = elemX + 'px !important';
        selected.style.top = elemY + 'px !important';
    }

    // update the old position of the mouse
    oldMouseX = newMouseX;
    oldMouseY = newMouseY;
}

function changePosOfSelectedElement(dx, dy) {

}

function stopMovingElem(evt) {
    selected = null;
}
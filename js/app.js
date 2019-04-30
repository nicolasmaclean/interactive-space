const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

var drawing;
var mousePos;
var tree;
var pressed;
var growing;

function init(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    c.fillStyle = "#333";
    c.fillRect(0, 0, canvas.width, canvas.height);

    drawing = new Drawing();
    mousePos = new Vector(canvas.width/2, canvas.height/2);
    // tree = new Tree(new Vector(mousePos.x, mousePos.y));
    growing = false;
}

window.addEventListener('resize', init);

window.addEventListener('mousedown', (e) => {
    if(e.button === 0){
        if(!growing){
            drawing.addToPath(new Vector(e.x, e.y));
        }
        pressed = true;
    } else if(e.button === 2){
        init();
    } else if(e.button === 1){
        growing = true;
    }
});

window.addEventListener('mouseup', (e) => {
    if(e.button === 0){
        pressed = false;
    }
});

window.addEventListener('mousemove', (e) => {
    if(pressed && !growing){
        drawing.addToPath(new Vector(e.x, e.y));
    }
});

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "#333";
    c.fillRect(0, 0, canvas.width, canvas.height);

    if(growing){
        // tree.update();
    } else {
        drawing.draw();
    }
}

init();
animate();
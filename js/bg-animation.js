var isDrawing = false;
var onImage = false;
var stage;

var canvas = document.querySelector('#window-bg');
var imageCursor = document.querySelector('.image-cursor');
var rightImage = document.querySelector('.right');
var content = document.querySelector('.content');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var drawingPoint = {
    x: 0,
    y: 0
}

var image;
var bitmap;
var color;

function init() {
    image = new Image();
    image.onload = handleComplete;
    image.src = "img/bg.png";

    stage = new createjs.Stage("window-bg");


}

rightImage.onmouseenter = function () {
    onImage = true;
}

rightImage.onmouseleave = function () {
    onImage = false;
}

content.onmouseenter = function () {
    onImage = true;
}

content.onmouseleave = function () {
    onImage = false;
}

function handleComplete() {
    stage.enableMouseOver();
    stage.enableDOMEvents(true);

    stage.addEventListener('stagemousedown', handleMouseDown);
    stage.addEventListener('stagemouseup', handleMouseUp);
    stage.addEventListener('stagemousemove', handleMouseMove);
    pointer = new createjs.Shape(new createjs.Graphics().beginFill(0, 0, 0, 1).drawCircle(0, 0, 25));
    pointer.cache(0, 0, image.width, image.height);

    drawingCanvas = new createjs.Shape();
    drawingCanvas.cache(0, 0, image.width, image.height);

    bitmap = new createjs.Bitmap(image);
    var bitmapMask = new createjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
    bitmap.filters = [bitmapMask];
    bitmap.cache(0, 0, image.width, image.height);

    color = new createjs.Bitmap(image);
    color.filters = [new createjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
    color.cache(0, 0, image.width, image.height);

    stage.addChild(color, bitmap);

    // cursor = new createjs.Shape(new createjs.Graphics().beginFill('#000').drawCircle(0, 0, 5));
    // cursor.cursor = 'none';
    // stage.addChild(cursor);


}

function handleMouseDown(event) {
    isDrawing = true;
}

function handleMouseMove(event) {
    // cursor.x = stage.mouseX;
    // cursor.y = stage.mouseY;
    // stage.update();
    var width;

    if (onImage) {
       width = 40;
    }
    else {
        width = 10;
    }
    
    imageCursor.style.width = `${width}px`;
    imageCursor.style.height = `${width}px`;
    imageCursor.style.transform = `translate(${stage.mouseX - width/2}px, ${stage.mouseY - width/2}px)`;


}

function handleMouseUp(event) {
    isDrawing = false;
}

init();

function tick() {
    var opacity = 0.7;
    var size = 20;
    // var imageCursorSize = 

    if (isDrawing) {
        opacity = 0.7;
        size = 40;
    }
    if (
        Math.abs(stage.mouseX - drawingPoint.x) > 0.05 ||
        Math.abs(stage.mouseY - drawingPoint.y) > 0.05
    ) {
        const x = isDrawing
            ? stage.mouseX
            : drawingPoint.x + (stage.mouseX - drawingPoint.x) / 10;
        const y = isDrawing
            ? stage.mouseY
            : drawingPoint.y + (stage.mouseY - drawingPoint.y) / 10;
        drawingPoint = {
            x,
            y
        };
        if (drawingCanvas) {
            drawingCanvas.graphics
                .clear()
                .beginFill("rgba(0,0,0," + opacity + ")")
                .drawCircle(x, y, size);
            drawingCanvas.updateCache();
            bitmap.updateCache();
            stage.update();
        }
    }

    window.requestAnimationFrame(tick);
}

tick();

function setup() {
    initializeFields();
    createCanvas(400, 300);
    textSize(40);
}

var choice;

function draw() {
    background(color(0xFF, 0xFF, 0xC7));
    fill(color(0xDC, 0xC9, 0xFF));
    if (choice == 0)
        rect(50, 50, 150, 2);
    if (choice == 1)
        rect(50, 100, 150, 2);
    if (choice == 2)
        rect(50, 150, 150, 2);
    if (choice == 3)
        rect(50, 200, 150, 2);
    if (choice == 4)
        rect(50, 250, 150, 2);
    text("Choice 1", 50, 50);
    text("Choice 2", 50, 100);
    text("Choice 3", 50, 150);
    text("Choice 4", 50, 200);
    text("Choice 5", 50, 250);
}

function mousePressed() {
    choice = int(random(5));
}

function initializeFields() {
    choice = -1;
}

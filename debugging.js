const pi = 3.14;
//let radius = 3;
let area = 0;

function circleArea(radius) {
area = radius * radius * pi;
return area;
}

//radius = 4;
area = radius * radius * pi;
area = circleArea(3);
console.log("Area1:", area)

area = circleArea(4);
console.log("Area2:", area);

interface Circle {
    kind: string;
    radius: number;
}

interface Square {
    kind: string
    sideLength: number;
}

type Shape = Square | Circle;

function getArea(shape: Shape) {
    // ...
}

let circle = {
    kind: "circle",
    radius: 100,
}

getArea(circle);
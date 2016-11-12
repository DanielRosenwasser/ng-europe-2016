
// Try replacing each type annotation with those in the comment.

interface Circle {
    kind: string; // : "circle";
    radius: number;
}

interface Square {
    kind: string; // : "square";
    sideLength: number;
}

type Shape = Square | Circle;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        default:
            return shape.sideLength ** 2;
    }
}
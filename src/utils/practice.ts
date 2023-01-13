// Practice Type Predicate
type Circle = { kind: "circle"; radius: number };
type Rect = { kind: "rect"; width: number; height: number };
type Shape = Circle | Rect;

function isCircle(shape: Shape): shape is Circle {
  return shape.kind === "circle";
}

function isRect(shape: Shape): shape is Rect {
  return shape.kind === "rect";
}
const myShapes: Rect[] = [{ kind: "rect", width: 10, height: 20 }];

const rects = myShapes.filter(isRect);

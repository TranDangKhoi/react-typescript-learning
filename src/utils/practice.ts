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

// Keyword

function log(obj: { name: string } | { age: number }) {
  if ("name" in obj) {
    console.log(obj.name);
  } else if ("age" in obj) {
    console.log(obj.age);
  }
}

const myStudent = {
  id: 1,
  name: "Khoi",
  age: 20,
};

type Student = typeof myStudent;
/*
type Student = {
    id: number;
    name: string;
    age: number;
}
*/

type Student2 = keyof typeof myStudent;
// type Student2 = "name" | "age" | "id"

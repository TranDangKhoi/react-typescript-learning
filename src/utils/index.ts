import { FinalProduct, Product, ProductNewFeature } from "./interfaces";

export function total(a: number, b: number): number {
  return a + b;
}
// const age: number = 19;
// const name: string = "Khoi";
// const isSophomore: boolean = true;

let randomNumber: unknown;
randomNumber = 100;
if (typeof randomNumber === "number") {
  randomNumber.toFixed(2);
}

function raiseError(err: string): never {
  throw new Error(err);
}

function reject() {
  return raiseError("Error");
}

let loop = function forever() {
  while (true) {
    console.log("Hello world");
  }
};

// Interface
const product: FinalProduct = {
  name: "Car",
  brand: "BMW",
  color: "red",
  speed: "100km/h",
};

function addProduct(product: FinalProduct) {}

addProduct(product);

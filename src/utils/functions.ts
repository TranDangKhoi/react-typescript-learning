// Function overloading
interface ICoordinate {
  x: number;
  y: number;
}

function parseCoordinate(obj: ICoordinate): ICoordinate;
function parseCoordinate(x: number, y: number): ICoordinate;
function parseCoordinate(param1: any, param2?: any): ICoordinate {
  let coords = {
    x: param1 as number,
    y: param2 as number,
  };
  if (typeof param1 === "object") {
    coords = {
      ...(param1 as ICoordinate),
    };
  } else {
    coords = {
      x: param1 as number,
      y: param2 as number,
    };
  }
  return coords;
}

parseCoordinate({ x: 10, y: 20 });
parseCoordinate(10, 20);

// Normal function
function avg(a: number, b: number): number {
  return (a + b) / 2;
}

// Arrow function
const addString = (x: string, y: string): string => `${x} and ${y}`;

// Default Parameters
function addNumberWithDefaultParams(a: number = 0, b: number = 0): number {
  return a + b;
}

addNumberWithDefaultParams();

// Union Types
function format(
  title: string,
  description: string,
  amount: string | number
): string {
  return `${title} and ${description} and ${amount}`;
}

format("Hey", "Handsome", ">.<");
format("Hey", "Handsome", 2);

// Promise function
const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Get data from ${url}`);

// Rest parameters
function information(id: number, ...names: string[]): string {
  return `${id} ${names.join(" ")}`;
}

information(1, "Khoi", "Tofu"); // (1, ["Khoi", "Tofu"]) nhưng đã bị destructured

// With Callback
function handleFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

// With Callback has Params
type UpdateArray = (n: number) => number;
function handleUpdateArray(numbers: number[], update: UpdateArray): number[] {
  return numbers.map((item) => update(item));
}

handleUpdateArray([1, 2, 3, 4, 5], (n) => n * 5); // 5 10 15 20 25

// Function return function
function handleValue(val: number) {
  return (n: number) => n * val;
}

const value = handleValue(5); // 5 là val
console.log(value(10)); // 10 là n
// Output: 50

// Create a function to print from 1 to 10

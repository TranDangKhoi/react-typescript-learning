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

// parseCoordinateFromObject({ x: 10, y: 20 });
// parseCoordinateFromObjectValues(10, 20);
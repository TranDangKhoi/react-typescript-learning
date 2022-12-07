// [number, number] => [100, 200]

type ThreeDimensionalCoordinate = [x: number, y: number, z: number];
function addThreeDimensionalCoordinate(
  a: ThreeDimensionalCoordinate,
  b: ThreeDimensionalCoordinate
): ThreeDimensionalCoordinate {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

addThreeDimensionalCoordinate([1, 100, 200], [200, 400, 600]);

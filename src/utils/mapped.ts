// type Developer = {
//   name: string;
// } & Record<string, any>;

type Developer = {
  name: string;
  // Rest field sẽ có key là kiểu string và value là string hoặc number
  [key: string]: string | number;
};

const Tofu: Developer = {
  name: "Tran dang Khoi",
  age: 20,
  gender: "male",
  school: "FPT Aptech",
};

// 2nd Example with keyof:

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
// Type ["darkMode", "newUserProfile"]
// Property: darkMode: void, newUserProfile: void
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
// Property: darkMode: boolean, newUserProfile: boolean

// Access Modifier
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type CreateMutable<Type> = {
  -readonly // Xóa readonly ra khỏi các file bên trong Type
  [Property in keyof Type]: Type[Property];
};

type UnlockedAccount = CreateMutable<LockedAccount>;

const unlockedUser: UnlockedAccount = {
  id: "fjskf1",
  name: "Khoi",
};

unlockedUser.name = "Tofu";

const lockedUser: LockedAccount = {
  id: "4124",
  name: "Bao",
};
// Cannot assign to 'name' because it is a read-only property.
// lockedUser.name = "Daddy";

// Key Mapping with as
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

interface Person {
  name: string;
  age: number;
  accomodation: string;
}

type LazyPerson = Getters<Person>;

const testPerson: LazyPerson = {
  getName: () => "Khoi",
  getAge: () => 20,
  getAccomodation: () => "Hanoi",
};

type RemoveKind<T> = {
  // T ở đây chính là interface Square
  // P là các key nằm trong interface Square
  [P in keyof T as Exclude<P, "kind">]: T[P];
};

interface Square {
  kind: string;
  edge: number;
}

const mySquare: RemoveKind<Square> = {
  edge: 5,
};

// Map over arbitrary unions

// Tạo ra một type EventConfig và extends (mở rộng) thêm một cái field nữa nằm trong đó
// Field đó là kind và có kiểu dữ liệu là string
type EventConfig<Events extends { kind: string }> = {
  // Bất kì cái nào sử dụng cái type này thì sẽ có các functions truyền vào toàn bộ các Events
  // Vì type EventConfig này đang có 1 type Events extends thêm kind: string; nên phải có thêm as E["kind"]
  [E in Events as E["kind"]]: (event: E) => void;
};

type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>;

// Conditional Types

// condition ? true : condition2 ? true : condition3 ? true : condition4 ? true : false

type someType<T> = T extends string ? string : boolean;
type MetCondition = someType<string>; // string
type NonMetCondition = someType<number>; // boolean

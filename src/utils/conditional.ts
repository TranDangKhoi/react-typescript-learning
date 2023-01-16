type conditionalType<T> = T extends string
  ? string
  : T extends boolean
  ? boolean
  : T extends number
  ? number
  : any;

type checkType = conditionalType<number>;

type MyInfer<T> = T extends infer E ? E : any;

type UseMyInfer = MyInfer<string>;

type ArrayElementType<T> = T extends (infer E)[] ? E : T;
// type of item1 is `number`
type item1 = ArrayElementType<number[]>;
// type of item2 is `string`
type item2 = ArrayElementType<string[]>;
// type of item3 is `{name: string}`
type item3 = ArrayElementType<{ name: string }>;

type FunctionElementType<T> = {
  [P in keyof T]: T[P] extends () => void ? T[P] : any;
};

interface MyItem1 {
  name: string;
  age: number;
  getName: () => void;
}

type MyFunction1 = FunctionElementType<MyItem1>;

// Lấy ra các key thỏa mãn điều kiện

type GetKeyOfInterface<T> = {
  [P in keyof T]: T[P] extends () => void ? T[P] : never;
}[keyof T];

interface myStudent2 {
  name: string;
  age: number;
  getName: () => void;
}

type Conditional = GetKeyOfInterface<myStudent2>;

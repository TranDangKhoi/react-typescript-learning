// Partial
interface Todo {
  name: string;
  description: string;
  estimatedDate: string;
}

// value 1: object có interface là Todo, value 2: object có interface cũng là Todo
// Nhưng các giá trị trong object thứ 2 là optional
function updateTodo(todo: Todo, newTodo: Partial<Todo>) {
  return { ...todo, ...newTodo };
}

console.log(
  updateTodo(
    {
      name: "Learn JS",
      description: "Learn in 6 months",
      estimatedDate: "14/1/2023",
    },
    // object thứ 2 không cần điền hết các fields
    {
      name: "Learn ReactJS",
    }
  )
);

// Required

// Readonly
interface yourInformation {
  name: string;
  age: number;
  isSophomore: boolean;
}

const khoiInformation: Readonly<yourInformation> = {
  name: "Khoi",
  age: 20,
  isSophomore: true,
};
// Cannot assign to 'name' because it is a read-only property.
// khoiInformation.name = "Someone else";

// Record
const nameAgeMap: Record<string, number> = {
  Alice: 21,
  Bob: 25,
};

interface catInfo {
  breed: string;
  age: number;
}

type catNames = "Cup" | "Puff" | "Tom";

const cats: Record<catNames, catInfo> = {
  Cup: {
    breed: "Persian",
    age: 2,
  },
  Puff: {
    breed: "Maine Coon",
    age: 1,
  },
  Tom: {
    breed: "Shortleg",
    age: 1,
  },
};

// Omit
interface Person {
  name: string;
  age: number;
  location?: string;
}

const Khoi: Omit<Person, "name" | "age"> = {
  location: "Kim Nguu",
};

// Exclude

type humanNames = Exclude<"Khoi" | "Hoang" | "Bao", "Hoang">;

const human: Record<humanNames, string> = {
  Khoi: "handsome",
  Bao: "ugly",
  // Object literal may only specify known properties, and 'Hoang' does not exist in type 'Record<humanNames, string>'.
  // Hoang: "handsome"
};

/* Ví dụ 2 */

type T2 = Exclude<string | number | (() => void), Function>;
// type T2 = string | number

// NonNullable

type NullExcluded = NonNullable<string | number[] | null | undefined>;
// type NullExcluded = string | number[]

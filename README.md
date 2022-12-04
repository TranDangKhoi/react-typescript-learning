# Primitive types

- Number
- String
- Boolean
- Bigint
- Undefined
- Symbol
- Null

# Structural types

- Object
- Array
- Tuple
- Enum
- Any
- Union
- Literal
- Function

# Tips

- parameters? : Tham số này không cần thiết phải truyền vào, ví dụ:

```ts
function displayReview(
  totalReviews?: number,
  name?: string,
  premiumUser?: boolean
) {
  return (
    <>
      Review total <strong>{totalReviews}</strong> | Last reviewed by{" "}
      <strong>{name}</strong> {premiumUser ? "⭐️" : ""}
    </>
  );
}
```

## Khái niệm và nguyên tắc báo các kiểu đặc biệt

### Object

- Không khai báo object như này:

```ts
const user: object = {
  firstName: "Tran",
  lastName: "Dang Khoi",
  age: 19,
  isSophomore: true,
};
```

- Thay vào đó phải khai báo như sau:

```ts
const user: {
  firstName: string;
  lastName: string;
  age: number;
  isSophomore: boolean;
} = {
  firstName: "Tran",
  lastName: "Dang Khoi",
  age: 19,
  isSophomore: true,
};
```

### Array

- Tiếp tục với ví dụ trên, nếu trong object đó có một properties với kiểu dữ liệu là mảng thì sao, ví dụ:

```ts
const user: {
  firstName: string;
  lastName: string;
  age: number;
  isSophomore: boolean;
  school: //type;
} = {
  firstName: "Tran",
  lastName: "Dang Khoi",
  age: 19,
  isSophomore: true,
  school: ["FPT Aptech", "Kinh Te Quoc Dan"],
};
```

- Nếu các bạn nghĩ, khi ta sửa code thành `school: array` hay `school: Array`, code sẽ chạy thì các bạn đã lầm, kiểu array cần được khai báo như sau `string[]`,`number[], ...` và với bài toán ở trên thì bạn thấy school đang là một array chứa các tên trường dưới dạng `string`, nên ta sẽ sử dụng `string[]` để xác định type cho nó

```ts
const user: {
  firstName: string;
  lastName: string;
  age: number;
  isSophomore: boolean;
  school: string[];
} = {
  firstName: "Tran",
  lastName: "Dang Khoi",
  age: 19,
  isSophomore: true,
  school: ["FPT Aptech", "Kinh Te Quoc Dan"],
};
```

- NHƯNG, ta sẽ lại vấp phải một vấn đề đó là nếu trong dãy array của ta bao gồm 2 kiểu dữ liệu khác nhau thì sao?

```ts
  school: ["FPT Aptech", "Kinh Te Quoc Dan", 69],
```

- Với trường hợp này, thì ta sẽ phải sử dụng `Union types`, union trong tiếng anh là sự liên minh, liên kết nên cũng dễ hiểu thôi nhỉ, ta sẽ liên minh string và number lại với nhau, cho chúng nó sống có tình người để có thể chia sẻ chỗ ở cùng nhau

```ts
const user: {
  firstName: string;
  lastName: string;
  age: number;
  isSophomore: boolean;
  school: (string | number)[];
} = {
  firstName: "Tran",
  lastName: "Dang Khoi",
  age: 19,
  isSophomore: true,
  school: ["FPT Aptech", "Kinh Te Quoc Dan", 69],
};
```

- Tuy nhiên thì Union Types không chỉ có như vậy :(

- Ví dụ ta có một mảng chứa nhiều `objects` tên là `reviews` thì ta sẽ khai báo như sau:

```ts
const reviews: {
  name: string;
  image: string;
  stars: number;
  premiumUser: boolean;
  date: string;
}[] = [
  {
    name: "Khoi Dev",
    image: "",
    stars: 5,
    premiumUser: true,
    date: "05/09/2022",
  },
  {
    name: "CharkaUI",
    image: "",
    stars: 4,
    premiumUser: false,
    date: "03/08/2022",
  },
  {
    name: "React Query",
    image: "",
    stars: 3,
    premiumUser: false,
    date: "04/08/2022",
  },
];
```

### Tuple

- Chúng ta sử dụng Tuple để chứa 2 hoặc nhiều giá trị có kiểu dữ liệu khác nhau và các dữ liệu đó phải được nhập vào theo đúng thứ tự kiểu dữ liệu mà ta đã khai báo, ví dụ như có thể chứa string và number trong ví dụ sau:

```ts
var empId: number = 1;
var empName: string = "Steve";

// Cách đúng:
var employee: [number, string] = [1, "Steve"];

// Cách sai:
var employee: [number, string] = ["Steve", 1];
```

- Ta còn có thêm **Tuple chứa nhiều kiểu giá trị trùng nhau**:

```ts
var user: [number, string, boolean, number, string];

user = [1, "Steve", true, 20, "Admin"];
```

- Và cả Tuple Array:

```ts
var employee: [number, string][];

employee = [
  [1, "Steve"],
  [2, "Bill"],
  [3, "Jeff"],
];
```

- Chúng ta truy cập và lấy giá trị từ mảng Tuple như sau:

```ts
var employee: [number, string] = [1, "Steve"];
employee[0]; // returns 1
employee[1]; // returns "Steve"
```

- Chúng ta có thể sử dụng `.push()` để thêm phần tử vào Tuple:

```ts
var employee: [number, string] = [1, "Steve"];

employee.push(2, "Bill");

console.log(employee); //Output: [1, 'Steve', 2, 'Bill']
```

- Tuple cũng giống như Array, chúng ta có thể sử dụng các method có sẵn trong Array cho Tuple như `pop(), push(), concat(), ...v.v`:

```ts
var employee: [number, string] = [1, "Steve"];

employee[1] = employee[1].concat(" Jobs");
console.log(employee); //Output: [1, 'Steve Jobs']
```

### Enum

- Enum, các bạn có thể hiểu là viết rút gọn của `Enumerator (bộ đếm, bộ đánh số)`, tại sao lại có tên gọi này? Tìm hiểu thêm thì ta sẽ rõ thôi

- Ở đây, mình sẽ tạo ra một bài toán về vai trò của user trong một app. Thông thường, trong một app có rất nhiều quyền `(admin, editor, moderator, police, premium, user)`, nhưng bài toán mình sắp code ở dưới đây sẽ sử dụng 3 role là `(admin, editor, moderator)`.

- Và đây là cách các bạn không nên code:

```ts
const ADMIN = "ADMIN";
const MODERATOR = "MODERATOR";
const EDITOR = "EDITOR";

const user: {
  firstName: string;
  lastName: string;
  permission: string;
} = {
  firstName: "Tran",
  lastName: "Dang Khoi",
  permission: ADMIN,
};
```

- Cách này thực sự rất không hay và không tối ưu

- Để giải quyết bài toán này thì ta có thể sử dụng `Enum`, và thực sự phải nói là `Enum` trong `Typescript` **rất hay và rất khỏe**. Giờ mình sẽ code lại đoạn code ở trên:

```ts
enum Permission {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  MODERATOR = "MODERATOR",
}

const user: {
  firstName: string;
  lastName: string;
  permission: string;
} = {
  firstName: "Tran",
  lastName: "Dang Khoi",
  permission: Permission.ADMIN,
};
```

- Just like that, mọi thứ thật pơ phệch và dễ hiểu, Enum sẽ có quickSuggest và khi di chuột vào dòng chữ Permission.ADMIN bạn cũng sẽ hiểu đoạn code đó nghĩa là gì

- Nhưng ở trên mình đã giải thích rằng Enum là một bộ đếm số mà, mà ví dụ ở trên làm gì có số má gì đâu ?... Đúng là như vậy thật! Tại vì mình chưa làm ví dụ về số cho các bạn xem thôi, thông thường khi lưu trữ `role` trong `database` người ta thường lưu ở dưới dạng `int` nên mình sẽ code lại cho `enum Permission` như sau:

```ts
enum Permission {
  ADMIN = 1,
  EDITOR = 2,
  MODERATOR = 3,
}

const user: {
  firstName: string;
  lastName: string;
  permission: number; // must be changed to number
} = {
  firstName: "Tran",
  lastName: "Dang Khoi",
  permission: Permission.ADMIN,
};
```

- Nhưng ... code như trên thì cũng đâu có gì hay đâu, chả khẳng định được gì. Vậy thì các bạn xem tiếp nhé, đây là cái hay của Enum, đó chính là trong hầu hết mọi trường hợp bạn chỉ cần xác định con số cho trường đầu tiên thôi, và các **trường sau sẽ hơn trường nằm trước nó 1 đơn vị**.

```ts
enum Permission {
  ADMIN = 1,
  EDITOR, // = 2
  MODERATOR, // 3
}
```

- Đó vậy là các bạn đã hiểu tại sao nó gọi là Enum rồi, khi ta khai báo cho `ADMIN = 1`, thì `EDITOR` sẽ bằng `ADMIN + 1 => EDITOR sẽ = 2`, và `MODERATOR` cũng tương tự, tức là `MODERATOR = EDITOR + 1 = 2 + 1 = 3`

### Any

- Nên cho cái này lếch, nên hạn chế sử dụng đến nó vì `Typescript` mà sử dụng `any` thì chả khác gì `Javascript` cả, chỉ nên sử dụng `KHI QUÁ BÍ`

### Union

- Mặc dù ở trên mình có 1 ví dụ về `Union` rồi nhưng mình chưa có một mục riêng cho nó nên mình sẽ viết lại. `Union types` được sử dụng khi một biến hoặc một tham số cho hàm có thể có nhiều kiểu kết hợp với nhau.

```ts
const user: {
  firstName: string;
  lastName: string;
  age: number;
  isSophomore: boolean;
  // dateOfBirth có thể là string hoặc number
  dateOfBirth: string | number;
} = {
  firstName: "Tran",
  lastName: "Dang Khoi",
  age: 19,
  isSophomore: true,
  dateOfBirth: 89328942,
};
```

- Còn đối với Union Array thì, ta chỉ cần `bọc các union types lại bằng dấu ngoặc () rồi thêm dấu [] bên phải`, ví dụ như sau:

```ts
const user: {
  firstName: string;
  lastName: string;
  // school là một array và trong mảng có thể chứa string hoặc number đều được
  school: (string | number)[];
} = {
  firstName: "Tran",
  lastName: "Dang Khoi",
  school: ["FPT Aptech", "Kinh Te Quoc Dan", 69],
};
```

### Literal

- Literal type có nghĩa là giá trị là một giá trị chính xác. Ví dụ bạn chỉ cho người dùng chọn `một trong 3 độ` tuổi là `18, 30, 40`, thì bạn sẽ sử dụng Literal type:

```ts
const user: {
  firstName: string;
  lastName: string;
  // age chỉ được = 18 hoặc 30 hoặc 40
  age: 18 | 30 | 40;
} = {
  firstName: "Tran",
  lastName: "Dang Khoi",
  age: 19,
};

// Output: age = 19 => Chương trình lỗi và không biên dịch lun
```

- Sửa lại thành:

```ts
const user: {
  firstName: string;
  lastName: string;
  // age chỉ được = 18 hoặc 30 hoặc 40
  age: 18 | 30 | 40;
} = {
  firstName: "Tran",
  lastName: "Dang Khoi",
  age: 18,
};
```

- Ok ok, cách này cũng hay nhưng ta có thể khai báo đống Literal type của ở ngoài:

```ts
type Age = 18 | 30 | 40;

const user: {
  firstName: string;
  lastName: string;
  // age chỉ được = 18 hoặc 30 hoặc 40
  age: Age;
} = {
  firstName: "Tran",
  lastName: "Dang Khoi",
  age: 18,
};
```

- Đó như này thì trông sẽ clean hơn, nhưng thực ra ... ta nên tách nó ra thành 1 file riêng, mình sẽ gọi nó là `types.ts` và `export nó ra`

```ts
export type Age = 18 | 30 | 40;
```

# Function type

- Khi mình nói tới `Function type` thì ý mình không phải sẽ có một kiểu dữ liệu `Function` khi ta khai báo một `function`:

```ts
// KHÔNG CÓ ĐÂU NHA
export function total(a: number, b: number): function {
  return a + b;
}
```

- Mà `Function type` ý mình ở đây là `kiểu dữ liệu mà Function đó return về`, ở `function total` bên trên thì nó sẽ `return về number`, nên ta sẽ code như sau khi bạn muốn chắc ăn:

```ts
export function total(a: number, b: number): number {
  return a + b;
}
```

- Tuy nhiên, có một vài `function không return về gì cả` thì nó cũng sẽ có một type riêng và các bạn nào mà `đã học môn lập trình căn bản` rồi thì hầu hết đều biết thôi, đó là `Void`

```ts
export function total(a: number, b: number): void {
  console.log(a + b);
  // Không return gì cả
}
```

### Unknown

- Đúng như tên gọi của nó, `unknown` dược sử dụng khi `ta không biết kiểu dữ liệu của giá trị đó là gì`. Những giá trị đó có thể tới từ user, hoặc có thể chúng ta muốn chấp nhận mọi values trong API của chúng ta. Và trong trường hợp này thì ta sẽ muốn sử dụng `unknonw` cho những giá trị đó để bảo với `compiler` rằng, những giá trị này có thể là bất kì thứ gì.

```ts
let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;
```

- Nếu bạn sử dụng `unknown`, bạn có thể `thu hẹp phạm vi của nó lại` bằng cách kiểm tra type của nó để biết rằng giá trị của nó đang nắm giữ là thuộc kiểu dữ liệu nào.

```ts
declare const maybe: unknown;
// 'maybe' could be a string, object, boolean, undefined, or other types
const aNumber: number = maybe;
// Type 'unknown' is not assignable to type 'number'.

if (maybe === true) {
  // TypeScript knows that maybe is a boolean now
  const aBoolean: boolean = maybe;
  // So, it cannot be a string
  const aString: string = maybe;
Type 'boolean' is not assignable to type 'string'.
}

if (typeof maybe === "string") {
  // TypeScript knows that maybe is a string
  const aString: string = maybe;
  // So, it cannot be a boolean
  const aBoolean: boolean = maybe;
Type 'string' is not assignable to type 'boolean'.
}
```

### Never

- Là 1 type mà `không chứa giá trị gì hết`, `chỉ sử dụng khi function của bạn trả ra Error` hoặc `là một vòng lặp vô tận`, hãy cũng mình làm các ví dụ sau:

```ts
function raiseError(err: string): never {
  throw new Error(err);
}
```

- Và nếu mình `viết 1 function khác` nhưng `giá trị return của nó là 1 function có type là error giống như trên` thì mặc nhiên, `function đó cũng sẽ có type là error nếu ta không xác định type cho nó`:

```ts
function raiseError(err: string): never {
  throw new Error(err);
}

// function reject() : never {}
function reject() {
  return raiseError("Error");
}
```

- Và nếu `function` nào mà có một `vòng lặp chạy vô tận` thì `type` của nó cũng sẽ là `never`:

```ts
let loop = function forever() {
  while (true) {
    console.log("Hello world");
  }
};
```

### Interface

- `Interface` cho phép bạn định nghĩ thuộc tính là gì và phương thức là gì mà đối tượng cần để được thực thi `(implement)`. Nếu đối tượng tuân thủ đúng khuôn mẫu `Interface` thì đối tượng đã `implement` `Interface` ấy sẽ được thi hành đúng. Nếu không thì sẽ phát sinh lỗi ngay lập tức. Những khái niệm như `Interface` hay `Abstract`, những người hay code `Java` thường sẽ `rất dễ hiểu`

- Nói khái niệm thì có vẻ hơi khó hiểu nên cùng làm ví dụ nhóe:

  - Bắt đầu với việc mình sẽ tạo ra một bài tập nhỏ, đó chính là tạo ra thông tin chi tiết của một ô tô và `add nó vào` một `array object`, thông thường nếu chưa học tới `Interface` bạn sẽ tạo và sử dụng nó như sau

  ```ts
  const car: {
    brand: string;
    color: string;
    maxSpeed: string;
    soldOut: boolean;
  } = {
    brand: "BMW",
    color: "white",
    maxSpeed: "300km/h",
    soldOut: false,
  };

  function addProduct(product: {
    brand: string;
    color: string;
    maxSpeed: string;
    soldOut: boolean;
  }) {
    // Code here
  }
  ```

  - Các bạn có thể thấy, mình phải viết đi viết lại rất nhiều công đoạn khai báo tên key, kiểu dữ liệu của key rất nhiều lần. Nhưng chuỗi ngày đó rồi cũng chấm dứt khi bạn học tới `Interface` trong `Typescript`

  ```ts
  interface ICar {
    brand: string;
    color: string;
    maxSpeed: string;
    soldOut: boolean;
  }

  const car: ICar = {
    brand: "BMW",
    color: "white",
    maxSpeed: "300km/h",
    soldOut: false,
  };

  function addProduct(product: ICar) {
    // Code here
  }
  ```

  - Đó chỉ cần viết `Interface` cho `Car` và thay đống object dài loằng ngoằng kia thành `ICar` là xong. Ta có thể sử dụng nó ở nhiều nơi bằng cách viết ra một file riêng rồi `export` ra:

  ```ts
  export interface ICar {
    brand: string;
    color: string;
    maxSpeed: string;
    soldOut: boolean;
  }
  ```

  - Ngoài ra, còn một chức năng rất hay giống như `Java` nữa đó chính là `extends`, khi ta muốn mở rộng thêm các `properties` khác cho `ICar` nữa, thì ta có thể tạo một `Interface` nữa, ví dụ tên là `ISportCar`:

  ```ts
  export interface ICar {
    brand: string;
    color: string;
    maxSpeed: string;
    soldOut: boolean;
  }

  export interface ISportCar extends ICar {
    releaseDate: string;
  }
  ```

  - Chỉ cần bạn viết như này thì mặc định `ISportCar` sẽ chứa cả các properties của `ICar` nữa, chứ ta không nên copy các properties của Car qua SportCar

  - Vậy sẽ có thêm câu hỏi là nếu mình `đặt 2 interface trùng tên nhau thì sao?` Thì `Typescript` nó sẽ hiểu 2 cái `Interfaces` đó là 1 và `Typescript` sẽ `merge` chúng nó vào với nhau

  ```ts
  export interface ICar {
    name: string;
    brand: string;
    color: string;
  }

  export interface ICar {
    speed: string;
  }
  ```

  - Đoạn code ở trên sẽ giống với như sau:

  ```ts
  export interface ICar {
    name: string;
    brand: string;
    color: string;
    speed: string;
  }
  ```

  - Nhưng ta không nên làm như này, rất dễ bị loạn và không cần thiết, nếu thực sự cần `speed` nằm ở `ICar` thì ta nên sử dụng nó ngay lúc khởi tạo lần đầu luôn

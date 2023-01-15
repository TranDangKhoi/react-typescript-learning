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

- Đúng như tên gọi của nó, `unknown` dược sử dụng khi `ta không biết kiểu dữ liệu của giá trị đó là gì`. Và trong trường hợp này thì ta sẽ muốn sử dụng `unknown` cho những giá trị đó để bảo với `compiler` rằng, những giá trị này có thể là bất kì thứ gì.

```ts
let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;
```

- Nếu bạn sử dụng `unknown`, bạn có thể `thu hẹp phạm vi của nó lại` bằng cách kiểm tra type của nó để biết rằng giá trị của nó đang nắm giữ là thuộc kiểu dữ liệu nào.

```ts
function render(document: unknown) {
  // We have to narrow down to a specific
  // type before we can perform any operations
  // on an unknown type.
  if (typeof document === "string") {
    document.toLowerCase();
  }
  if (typeof document === number) {
    document.toFixed();
  }
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
  // LƯU Ý: GIỐNG NHƯ TRONG C# NẾU MUỐN ĐẶT TÊN CHO INTERFACE THÌ PHẢI CÓ CHỮ I
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

  - Ngoài ra, còn một chức năng rất hay giống như `Java` nữa đó chính là `extends`, khi ta muốn mở rộng thêm các properties khác cho `ICar` nữa, thì ta có thể sử dụng `extends`, ví dụ ta tạo một `Interface` nữa tên là `ISportCar` sau đó `extends` nó từ thằng `ICar`:

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

  - Hoặc ... ta có thể sử dụng `Intersection Type (&)`:

  ```ts
  export type IFinalCar = ICar & ISportCar;
  ```

# Function overloading

- `Function overloading` là trường hợp mà các `functions` có `tên giống nhau`, có `cùng số lượng parameters (chỉ đúng khi parameters không phải Object hay Array)` nhưng `các parameters của các functions này có kiểu dữ liệu khác`. `Function overloading` thường được thấy trong code của các thư viện của `React` còn để phát triển web thì cực kì ít dùng

- Thoạt nghe thì thấy bình thường thôi nhưng mà các bạn phải nhận ra một điều là: Trong 1 `file`, nếu mà có 2 `function` cùng tên thì chắc chắn rằng sẽ **lỗi**

```ts
function total(a: number, b: number): number {
  return a + b;
}

function total(a: string, b: string): string {
  return a + b;
}
// Error: Duplicate function implementation.
```

- Vậy phải làm sao để ta có thể áp dụng được Function Overloading? Ta sẽ sửa lại đoạn code như sau:

```ts
function total(a: number, b: number): number;
function total(a: string, b: string): string;
function total(a: any, b: any) {
  return a + b;
}

total(5, 7); // 12
total("a", "b"); // ab
```

- Đó vậy là ta đã có được hai trường hợp là sử dụng `tham số là Number` và `tham số là String` truyền vào `total()`. Đừng lầm tưởng mình đặt kiểu dữ liệu cho `a` và `b` là `any` ở `dòng thứ 3`, mà muốn truyền vào `a` và `b` kiểu dữ liệu gì cũng được nhé. Nếu muốn test các bạn có thể thử `comment dòng số 2` đi:

```ts
function total(a: number, b: number): number;
// function total(a: string, b: string): string;
function total(a: any, b: any) {
  return a + b;
}

total(5, 7); // 12
total("a", "b"); // Không chạy

// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

- Ở trên, mình có nói là `Function Overloading` sẽ có cùng số lượng parameters truyền vào, nhưng điều đó là không hoàn toàn đúng, nó chỉ đúng khi ta không truyền vào một object. Nên bây giờ mình sẽ ví dụ về một bài tập khi ta truyền vào Object thì phải làm thế nào?

  - Đầu tiên, như trên mình tạo ra 3 function và sử dụng `Interface` để chứa tọa độ `x` và `y`:

  ```ts
  interface ICoordinate {
    x: number;
    y: number;
  }

  function parseCoordinate(obj: ICoordinate): ICoordinate;

  function parseCoordinate(x: number, y: number): ICoordinate;

  function parseCoordinate(param1: any, param2: any): ICoordinate {
    return (coords = {
      x: param1,
      y: param2,
    });
    return coords;
  }
  // Error: This overload signature is not compatible with its implementation signature.
  ```

  - Lúc này chương trình của ta sẽ lỗi, hiểu nôm na là `function parseCoordinate thứ nhất` đang không tương thích với `thằng thực thi` nó (tức là thằng `passCoordinate số 3`), bởi thằng số 3 đang truyền vào `2 tham số` còn thằng số 1 truyền vào 1 `Object`. Vậy để sửa lỗi này ta phải làm sao? Ta phải cho `tham số thứ 2 `của `Function thực thi` thành `optional (?) `:

  ```ts
  interface ICoordinate {
    x: number;
    y: number;
  }

  function parseCoordinate(obj: ICoordinate): ICoordinate;

  function parseCoordinate(x: number, y: number): ICoordinate;

  function parseCoordinate(param1: any, param2?: any): ICoordinate {
    let coords = {
      x: param1,
      y: param2,
    };
    return coords;
  }
  ```

  - Đó như ta thấy nó đã hết sạch lỗi, nhưng xử lý như thế này thì chưa được tối ưu, `param1` và `param2` đang là kiểu `Any` vậy nên khi gán vào `x` và `y` ta phải sử dụng `Type Assertion (as)` để gán cho nó một kiểu dữ liệu, còn nếu ta mà truyền vào `Object` thì `param1` sẽ là kiểu `Object`, không xét tới `param2` nữa:

  ```ts
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
  ```

# Intersection Type

- Ở trên mình có nói rồi, nó là dấu `&` và để merge 2 Interface lại

```ts
export interface Product {
  name: string;
  brand: string;
  color: string;
}

export interface ProductNewFeature extends Product {
  speed: string;
}

export type FinalProduct = Product & ProductNewFeature;
```

# Type Casting

- Khi ta code như sau:

```tsx
const Card = () => {
  useEffect(() => {
    const input = document.querySelector("input");
    //Error: Object is possibly null
    console.log(input.value);
  }, []);
  return (
    <div>
      <input type="text" />
    </div>
  );
};
```

- Ta nhận được một lỗi: `Object is possibly null`, và phải hover chuột vào input ta mới thấy nó đang ở dạng union types: `const input: HTMLInputElement | null`, nên ta phải cast nó sang `HTMLInputElement` để cho lỗi kia biến mất, ngoài ra còn rất nhiều DOM Type khác nữa nên ta phải cẩn trọng

# Cách viết các loại function nâng cao hơn với Typescript

1. `Arrow Function`

```ts
const addString = (x: string, y: string): string => `${x} and ${y}`;
```

2. `Function` với `Default Parameters Value`

```ts
function addNumberWithDefaultParams(a: number = 0, b: number = 0): number {
  return a + b;
}
```

3. `Function` có `Union Type Parameter`

```ts
function format(
  title: string,
  description: string,
  amount: string | number
): string {
  return `${title} and ${description} and ${amount}`;
}

format("Hey", "Handsome", ">.<");
format("Hey", "Handsome", 2);
```

4. `Function` trả về `Promise`

```ts
const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Get data from ${url}`);
```

5. `Function` có `Rest Parameters`

```ts
function information(id: number, ...names: string[]): string {
  return `${id} ${names.join(" ")}`;
}

information(1, "Khoi", "Tofu"); // (1, ["Khoi", "Tofu"]) nhưng đã bị destructured
```

6. `Function` có `Callback` đơn giản

```ts
function handleFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}
```

7. `Function` có `Callback` và bên trong `Callback` lại có `Parameters`

```ts
function handleUpdateArray(
  numbers: number[],
  update: (n: number) => number
): number[] {
  return numbers.map((item) => update(item));
}

handleUpdateArray([1, 2, 3, 4, 5], (n) => n * 5); // 5 10 15 20 25
```

# Generic Types

Generic Types là việc cho phép truyền type vào components, function hay interface, ... một cách linh động. Nếu trước đây bạn phải sử dụng Function Overloading để viết thư viện thì giờ bạn có thể sử dụng Generic Types vì nó sẽ giúp bạn tiết kiệm được các dòng code.

Bạn hiểu nôm na là khi bạn sử dụng Generic Types, khi invoke function, bạn truyền gì vào function thì nó sẽ tự định dạng type cho cái đó

### Tại sao lại cần Generic?

Chúng ta tạo một function nhận vào 2 tham số cùng kiểu dữ liệu (string | number) và return về một Turple.

```ts
// union type : `string` and `number`
type NS = string | number;

// function that returns a tuple
function getTuple(a: NS, b: NS): [NS, NS] {
  return [a, b];
}

let stringArray = getTuple("hello", "world");

let numberArray = getTuple(1.25, 2.56);

//case error
let mixedArray = getTuple(1.25, "world");

// Property 'toUpperCase' does not exist on type 'NS'.
console.log(stringArray.map((s) => s.toUpperCase()));

// Error: Property 'toFixed' does not exist on type 'NS'.
console.log(numberArray.map((n) => n.toFixed()));
```

Ở ví dụ trên function `getTuple` có 2 tham số `a` và `b `có kiểu NS (Union type) và trả về một tuple `[NS, NS]`.

Bây giờ chúng ta có một vài vấn đề với function trên:

- Đầu tiên chúng ta không thể ràng buộc `a` và `b` có cùng kiểu dữ liệu bời vì `a` và `b` có thể là chuỗi hoặc số.

- Thứ hai là khi function trả về 1 `tuple (array)` chứa các giá trị có kiểu `string` hoặc `number` và trình biên dịch Typescript không cho phép ta làm như vậy bởi vì nó cần phải biết chính xác kiểu dữ liệu của các giá trị trả về.

Cách để giải quyết vấn đề là sử dụng `any` type cho `a` và `b` và `tuple [any, any]`. Hoặc ta có thể sử dụng `Type Assertion` để ép kiểu giá trị trong tuple (NS thành string hoặc number).
Tuy nhiên cả 2 cách đều có thể gây ra lỗi nếu như chúng ta không tiến hành kiểm tra thủ công kiểu dữ liệu của các giá trị.

### Và Generic type xuất hiện, giúp chúng ta giải quyết những vấn đề trên 😆

Typescript hỗ trợ mạnh cho generics, chúng ta có thể sử dụng generic cho function, class, interface....

Bây giờ ta sẽ sửa lại ví dụ trên bằng cách sử dụng Generic function:

```ts
// function that returns a tuple
function getTuple<T>(a: T, b: T): [T, T] {
  return [a, b];
}

let stringArray = getTuple("hello", "world");

let numberArray = getTuple(1.25, 2.56);

let ucStrings = stringArray.map((s) => s.toUpperCase());

let numInts = numberArray.map((n) => n.toFixed());

// Error: Argument of type '"world"' is not assignable to parameter of type 'number'.
let mixedArray = getTuple(1.25, "world");
```

Bây giờ mình sẽ làm một bài toán sort các môn học theo độ khó của nó sử dụng Generic Types

Đầu tiên, phải có các môn học đã nhể:

```ts
const subjects: {
  name: string;
  difficulty: number;
}[] = [
  {
    name: "ReactJS",
    difficulty: 60,
  },
  {
    name: "Angular",
    difficulty: 90,
  },
  {
    name: "VueJS",
    difficulty: 70,
  },
];
```

Bạn có thể thấy các object đang được sắp xếp không theo thứ tự nào hết, bây giờ mình sẽ bắt đầu viết function nha

```ts
function ranker<RankItem>(
  // Là một mảng có Generic Types là RankItem (các bạn có thể đặt ngắn gọn hơn là R)
  items: RankItem[],
  // Là một callback để thực hiện chức năng trả về giá trị number của difficulty
  rankCallBack: (v: RankItem) => number
): RankItem[] {
  // Tạo ra một biến ranks lưu trữ giá trị của các thứ được truyền vào
  const ranks: {
    // Trả về Generic Types
    item: RankItem;
    // Trả về number (từ difficulty truyền vào)
    rank: number;
    // Lưu vào một array chứa các object
  }[] = items.map((item) => ({
    // Lưu trữ giá trị item truyền vào
    item: item,
    rank: rankCallBack(item),
  }));
  // Sắp xếp theo rank (rank ở đây là từ difficulty truyền vào á)
  ranks.sort((a, b) => a.rank - b.rank);
  // Trả về một mảng đã được sorted
  return ranks.map((rank) => rank.item);
}
```

Hmm, mình sẽ viết một interface là `IRank` để chứa Object type của biến `ranks` nhé

```ts
interface IRank<RankItem> {
  item: RankItem;
  rank: number;
}
```

Sau đó thay vào `type` hiện tại của biến `ranks`

```ts
function ranker<RankItem>(
  items: RankItem[],
  rankCallBack: (v: RankItem) => number
): RankItem[] {
  // Thay vô đây
  const ranks: IRank<RankItem>[] = items.map((item) => ({
    item: item,
    rank: rankCallBack(item),
  }));
  //

  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}
```

# keyof trong Generic Types

Trong Javascript Object, có hai khái niệm đó chính là `key` and `value`, ví dụ:

```ts
const student = {
  name: "Khoi",
  age: 19,
};
```

Thì ở đây key lần lượt là `name` và `age`, còn value lần lượt là `Khoi` và `19`. Nếu các bạn đã hiểu cái này thì việc giải thích keyof cũng khá dễ dàng thôi

keyof được hiểu nôm na là key của 1 object mà bạn truyền vào thôi, như ví dụ ở trên thì keyof `student` chính là `name` và `age`

Cùng mình làm ví dụ về một function truyền vào keyof và giải thích giá trị hàm trả về

```ts
const devices = [
  {
    name: "Iphone",
    price: 1000,
  },
  {
    name: "Ipad",
    price: 2000,
  },
  {
    name: "Macbook",
    price: 3000,
  },
];
// Truyền vào A(type là array), A ở đây đang truyền vào devices, B là key của các object nằm bên trong mảng A
// Function lấy ra value của các key nằm bên trong object của mảng devices
function getDevicesKey<A, B extends keyof A>(items: A[], key: B): A[B][] {
  // Hiểu nôm na là map ra rồi trả về item.key
  // item.key là giá trị của key mình truyền vào ở phần đối số bên dưới
  return items.map((item) => item[key]);
}
// Truyền vào mảng và tên key, nếu key mà không giống bất kì cái nào nằm trong object thì lỗi chương trình
console.log(getDevicesKey(devices, "name"));

// key mà là name, thì in ra mảng chứa name
// ["Iphone", "Ipad", "Macbook"]
// key mà là price, thì in mảng chứa price
// [1000,2000,3000]
```

Có thể các bạn thấy function đang trả về `A[B][]`, và các bạn thắc mắc, không hiểu cái đó có nghĩa là gì, thế thì xin mời học lại Object, bởi vì `A[B]` có nghĩa là `A.B`, nhưng Typescript không cho phép ta làm như vậy, để hiểu rõ hơn thì:

```ts
const student = {
  name: "Khoi",
  age: 19,
};

console.log(student.name);
// Output: Khoi
console.log(student[name]);
// Output: Khoi
```

Đó 2 output đều giống nhau, đó là 2 cách để lấy `value` của một `key` nằm trong object `student`, nhưng với Typescript thì ta nên sử dụng `student[name]` khi làm việc với Generic Types

Ngoài ra thì keyof cũng rất có ích khi ta làm việc với Mapped Types, sau này ta sẽ học tới

## Utility Types

#### Partial<Type>

`Partial` khiến cho các key của nó trở thành optional khi sử dụng, ví dụ:

```ts
interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
```

#### Required<Type>

Ngược lại với `Partial`, thì `Required` khiến cho tất cả các key trong object cần phải được sử dụng, ví dụ:

```ts
interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: "Ford",
  model: "Focus",
  mileage: 12000,
  // `Required` forces mileage to be defined
};
```

#### Readonly<Type>

`Readonly` khiến cho tất cả các key trong object đó ở dưới dạng read-only, không thể thay đổi được, chỉ đọc được dữ liệu thôi

```ts
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
khoiInformation.name = "Someone else";
```

#### Record<Key, Type>

`Record` là một đường tắt để khai báo một object và định nghĩa sẵn type của key và value cho object đó, ví dụ:

```ts
const nameAgeMap: Record<string, number> = {
  // string:number
  Alice: 21,
  Bob: 25,
};
```

Thêm 1 ví dụ nữa:

```ts
const requirement: Record<string, boolean> = {
  // string:boolean
  learnedJavascript: true,
  learnedReactJS: true,
};
```

Và một cái nữa:

```ts
interface catInfo {
  breed: string;
  age: number;
}

type catNames = "Cup" | "Puff" | "Tom";

// catNames: object{breed,age}
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
```

#### Omit<Type,Key>

`Omit` được dùng để xóa key ra khỏi một object type

```ts
interface Person {
  name: string;
  age: number;
  location?: string;
}

const Khoi: Omit<Person, "age" | "location"> = {
  name: "Khoi",
  // `Omit` đã xóa đi 2 properties là age và location
};
```

#### Pick<Type, Key>

`Pick `cũng để xóa bỏ keys giống `Omit`, nhưng thay vì truyền vào những key muốn xóa, thì ta truyền vào key muốn giữ lại

```ts
interface Person {
  name: string;
  age: number;
  location?: string;
}

const Khoi: Pick<Person, "name"> = {
  name: "Khoi",
  // `Pick` giữ lại name và xóa bỏ hoàn toàn age và location
};
```

#### Exclude<UnionType, ExcludedMembers>

`Exclude` có chức năng xóa bỏ các types bạn muốn khỏi một union

```ts
type boyNames = Exclude<"Khoi" | "Hoang" | "Bao", "Hoang">;

const boys: Record<boyNames, string> = {
  Khoi: "handsome",
  Bao: "ugly",

  // Object literal may only specify known properties, and 'Hoang' does not exist in type 'Record<humanNames, string>'.
  Hoang: "handsome",
};
```

Hay một ví dụ ngắn hơn:

```ts
type T2 = Exclude<string | number | (() => void), Function>;
// type T2 = string | number
```

#### NonNullable<Type>

Xóa các kiểu dữ liệu null hoặc undefined ra khỏi Type

```ts
type NullExcluded = NonNullable<string | number[] | null | undefined>;
// type NullExcluded = string | number[]
```

Ngoài ra còn rất nhiều nữa... nhưng thui, nói 1 số cái tiêu biểu thui

# Mapped Types

Khi lập trình, ta có một luật lệ là DRY (Don't Repeat Yourself) tức là không nên code lặp lại một cái quá nhiều lần. Và Mapped Types trong Typescript chính là 1 yếu tố quan trọng để giúp ta

Mapped Types về cơ bản là để thay đổi một type đang có sẵn ra thành một type khác do mình tùy chỉnh

Giống như việc bạn copy paste code trên StackOverFlow, code của người ta bạn paste vào y hệt và chỉ tùy chỉnh một chút đoạn code đó theo ý mình

Nếu bạn nào đã học Javascript thì sẽ có một function của `Array`, đó chính là `.map()` dùng để tùy chỉnh các giá trị bên trong mảng theo ý mình. Đối với `Mapped Type` cũng vậy, ta có sẵn một `Type` và ta sẽ tùy chỉnh nó theo ý mình

## VD1 - cơ bản nhất, dễ hiểu nhất:

```ts
type AppConfig = {
  username: string;
  layout: string;
};

type Username = AppConfig["username"];
```

Ở bên trên, ta chỉ cần khai báo `[key: string]: string | number;` thì các fields của object còn lại sẽ tự đi theo cái format đó luôn

### VD2 - Bắt đầu củ chuối:

```ts
// Các bạn cứ hiểu đây là một cái Middleware, được sử dụng để tùy chỉnh lại tất cả các properties bên trong 1 type thành giá trị boolean
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

// Ban đầu FeatureFlags đang ở dạng như này, giờ hãy sử dụng mapped type để tùy chỉnh lại làm cho các function trả về void bên trong trở thành boolean
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

// Map tất cả các property nằm trong type Feature Flags thành 1 giá trị boolean thay vì 1 function trả về void
type FeatureOptions = OptionsFlags<FeatureFlags>;

/*
Sau khi FeatureFlags đã được map thành FeatureOptions:

type FeatureOptions = {
    darkMode: boolean;
    newUserProfile: boolean;
}
*/
```

### VD3: Index Signature

```ts
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
```

# Mapping Modifiers

Trong Typescript ta có thể sử dụng các tiền tố là `-` và `+` để thay đổi các tính chất về `mutability` và `optionality`

Vậy mutability và optionality là gì ??

- mutability: khả năng biến đổi (read-only, read-write)
- optionality: quyền lựa chọn (optional or required)

Nói vậy thì có vẻ vẫn hơi khó hiểu, chúng ta sẽ cùng làm một ví dụ về nó nhé:

Mình sẽ tạo ra một type chứa các giá trị read-only

```ts
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};
```

Sau khi tạo xong, mình sẽ tạo thêm 1 object với cái type `LockedAccount` mình vừa tạo đó

```ts
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

const lockedUser: LockedAccount = {
  id: "fBa9144fS",
  name: "Khoi",
};
```

Sau khi tạo xong object lockedUser như trên, mình sẽ thử thay đổi các giá trị bên trong object đó nhé

```ts
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

const lockedUser: LockedAccount = {
  id: "fBa9144fS",
  name: "Khoi",
};

// Cannot assign to 'name' because it is a read-only property.
lockedUser.name = "Tofu";
```

Như các bạn thấy thì hiện tại, do property name đang ở chế độ readonly, nên mình không thể mutate (thay đổi) giá trị của nó được, và đồng nghĩa với id cũng vậy vì nó cũng có readonly đứng trước

Giờ mình sẽ tiến hành sử dụng Mapped Types để tạo ra một Type khác nhưng mình sẽ thêm prefix (tiền tố) đứng trước nó, đó chính là một cái dấu trừ (-)

```ts
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

const lockedUser: LockedAccount = {
  id: "fBa9144fS",
  name: "Khoi",
};

// Cannot assign to 'name' because it is a read-only property.
lockedUser.name = "Tofu";

//Đoạn code mới ở đây

// Xóa readonly ra khỏi các Property bên trong Type bằng prefix (-)
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};
```

Giờ mình sẽ tiến hành tạo một Type mới dựa trên type CreateMutable mình vừa tạo

```ts
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

const lockedUser: LockedAccount = {
  id: "fBa9144fS",
  name: "Khoi",
};

// Cannot assign to 'name' because it is a read-only property.
lockedUser.name = "Tofu";

// Xóa readonly ra khỏi các Property bên trong Type bằng prefix (-)
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

//Đoạn code mới ở đây
type UnlockedAccount = CreateMutable<LockedAccount>;
```

Sau khi sử dụng prefix(-) để loại bỏ tính chất readonly của các type rồi, thì ta bắt đầu sử dụng thử nó thôi

```ts
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

const lockedUser: LockedAccount = {
  id: "fBa9144fS",
  name: "Khoi",
};

// Cannot assign to 'name' because it is a read-only property.
lockedUser.name = "Tofu";

// Xóa readonly ra khỏi các Property bên trong Type bằng prefix (-)
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type UnlockedAccount = CreateMutable<LockedAccount>;

//Đoạn code mới ở đây
const unlockedUser: UnlockedAccount = {
  id: "fjskf1",
  name: "Khoi",
};

unlockedUser.name = "Tofu";
```

Đó như các bạn thấy, mình đã có thể thay đổi được `name` mà không gặp bất kì lỗi nào cả. RẤT TUYỆT

Còn đối với optionality(?) thì ta cũng chỉ việc đặt dấu trừ (-) ra đằng trước dấu hỏi chấm (?) thì sẽ loại bỏ được nó thui, ví dụ:

```ts
// Concrete: cụ thể hóa - bê tông

// Mình cũng không hiểu sao doc của Typescript lại đặt cái tên như này nữa, chắc phải >9.0 IELTs mới hiểu được
type Concrete<Type> = {
  [Property in keyof Type]?: Type[Property];
};
```

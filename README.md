# Primitive types

- typeof
- Number Types
- String Types
- Boolean Types

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

#### Object

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

#### Array

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

- Với trường hợp này, thì ta sẽ phải sử dụng `Union types`, union trong tiếng anh là sự liên minh. liên kết nên cũng dễ hiểu thôi nhỉ, ta sẽ liên kết string và number lại với nhau

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
  school: ["FPT Aptech", "Kinh Te Quoc Dan"],
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

#### Tuple

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

#### Enum

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

- Đó vậy là các bạn đã hiểu tại sao nó gọi là Enum rồi, khi ta khai báo cho `ADMIN = 1`, thì `EDITOR` sẽ bằng `ADMIN + 1` `EDITOR sẽ = 2`, và MODERATOR cũng tương tự, tức là `MODERATOR = EDITOR + 1 = 2 + 1 = 3`

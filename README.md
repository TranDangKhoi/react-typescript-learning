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

## Nguyên tắc báo các kiểu đặc biệt

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

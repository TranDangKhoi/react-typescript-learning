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

// A là mảng, hiện tại là devices, B là các key nằm trong A
// function trả về A[B][]
// Để hình dung cho dễ hiểu thì A[B] chính là A.B
// Ví dụ về một object đơn giản như sau
const obj = {
  name: "Iphone",
  price: 1000,
};
// Muốn lấy ra giá trị của name có phải là ta sẽ sử dụng obj.name đúng hem, hay trong JS còn có cách viết khác
// Đó chính là obj[name]

function getDevicesKey<A, B extends keyof A>(items: A[], key: B): A[B][] {
  // Hiểu nôm na là map ra rồi trả về item.key
  return items.map((item) => item[key]);
}

console.log(getDevicesKey(devices, "name"));

// key mà là name, thì in ra mảng chứa name
// ["Iphone", "Ipad", "Macbook"]
// key mà là price, thì in mảng chứa price
// [1000,2000,3000]

//--HTTP Request--

// let request = new XMLHttpRequest();

// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log(">>> chekc res", request);
//   }
// };

// request.open("GET", "https://jsonplacehilde,typicode.com.todos", true);
// request.send();

// -- Callback Functions--

// function getTodos() {
//   let request = new XMLHttpRequest();

//   request.onreadystatechange = function () {
//     if ((this.readyState === 4 && this, request.status === 200)) {
//       console.log(">>> chekc res", request);
//     } else {
//       console.log(">>status:", request.status);
//     }
//   };

//   request.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
//   request.send();
// }

// getTodos();

// -- Callback Functions VD thêm--

// const callback = (error, data) => {
//   if (error) {
//     console.log(">> calling callback with error: ", error);
//   }
//   if (data) {
//     console.log(">> calling callback with data: ", data);
//   }
// };

function getTodos() {
  let request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if ((this.readyState === 4 && this, request.status === 200)) {
      // Lấy data tu ben tab Netwwork va Convert JSON
      const data = JSON.parse(request.responseText);
      //--Convert JSON -> string
      const datatring = JSON.stringify(data);
      callback(undefined, data);
      callback(undefined, datatring);
    }
    if ((this.readyState === 4 && this, request.status !== 200)) {
      callback("somethings wrongs", undefined);
    }
  };

  request.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  request.send();
}

// getTodos(callback);
// Promiese

//>>>> Fetch API

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((Response) => {
//     return Response.json();
//   })
//   .then((data) => {
//     // console.log(">>> check fetch data :", data);
//   });

// //>>> async & await
// const getNewtodo = async (id) => {
//   let response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${id}`
//   );
//   let data = await response.json();
//   return data;
// };
// getNewtodo(2).then((data) => {
//   console.log("check :", data);
// });

// Thêm event listener để bắt sự kiện click và thực hiện hành động khi click vào button
let button = document.getElementById("myButton");
button.addEventListener("click", function () {
  // alert(" con chim non");
  console.log("data:", data);
});

// JS tu hoc

// let data = prompt("nhap data");
// console.log("Du lieu data : ", data);
// console.log("Du lieu data : ", typeof "data");

//lam tron sau dau cham toFixed()
// let dtb = 1.982359852378795432;
// console.log(dtb.toFixed(2));

//Tinh chu vi dien tich hinh tron
// let r = Number(prompt("nhap ban kinh:"));
// console.log(r);
// console.log(typeof r);

// let Pi = Math.PI;
// let chuVi = 2 * Pi * r;
// let dienTich = Pi * r * r;

// console.log(chuVi);
// console.log(dienTich);

// Tinh chu vi dien tich hcn
// let a = Number(prompt("nhap chieu dai:"));
// let b = Number(prompt("nhap chieu rong:"));

// let chuVihcn = (a + b) * 2;
// let dienTichhcn = a * b;

// console.log("chu vi:", chuVihcn);
// console.log("dien tich:", dienTichhcn);

//Nhap diem 3 mon-> TB lam tron 2 chu so

let a = Number(prompt("Mon Toan:"));
let b = Number(prompt("Mon Van:"));
let c = Number(prompt("Mon Anh:"));

let dtb = (a + b + c) / 3;
console.log("Diem trung binh la:", dtb.toFixed(2));

if (dtb > 8) {
  console.log("hoc sinh kha");
} else {
  console.log("hoc sinh TB");
}

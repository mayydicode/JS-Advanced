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

const callback = (error, data) => {
  if (error) {
    console.log(">> calling callback with error: ", error);
  }
  if (data) {
    console.log(">> calling callback with data: ", data);
  }
};

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

getTodos(callback);
// Promiese

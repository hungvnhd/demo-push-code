let form = document.getElementById("form");
let email = "hungvnhd@gmail.com";
let password = "123456";

// lấy giá trị input thông qua name
console.log(form.email.value);
console.log(form.password.value);

//submit event
form.onsubmit = function (event) {
  event.preventDefault();

  if (form.email.value == "") {
    document.getElementById("email-error").innerHTML = "Please input email";
  }
  if (form.password.value == "") {
    document.getElementById("error-password").innerHTML =
      "Please input Password";
  }
  if (form.email.value !== "" && form.password.value !== "") {
    if (form.email.value !== email) {
      document.getElementById("email-error").innerHTML = "Invalid Email";
    }
    if (form.password.value !== password) {
      document.getElementById("error-password").innerHTML = "Invalid password";
    }
    if (form.password.value == password && form.email.value == email) {
      document.getElementById("error-password").innerHTML =
        "Đăng nhập thành công!";
      document.getElementById("email-error").innerHTML = "";
    }
    if (form.email.value == email && form.password.value !== password) {
      document.getElementById("error-password").innerHTML = "Invalid Password";
      document.getElementById("email-error").innerHTML = "";
    }
    if (form.email.value !== email && form.password.value == password) {
      document.getElementById("email-error").innerHTML = "Invalid Email";
      document.getElementById("error-password").innerHTML = "";
    }
  }
};

//excercise;
//Tiến hành validate form
//khi người dùng không nhập vào email--> Hiển thị trên dom một dòng text đỏ
//"Email ko đc bỏ trống"
// khi người dùng nhập vào password----> hiển thị trên DOM một dòng text đỏ
//"Password không được bỏ trống"

//Khi người dùng nhập vào email và password đầy đủ, tiến hành kiểm tra
//với biến email và password đặt sẵn trong file JS
//Nếu sai email---> hiển thị ra text đỏ trong dom "sai email"
//Nếu sai password-->hiển thị ra text đỏ trong dom"sai password"

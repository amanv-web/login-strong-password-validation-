//variables  
const password = document.getElementById("password-input");
const confirmpassword = document.getElementById("confirmpassword");
const submit = document.getElementById("btn");
const error = document.getElementById("error");
const check = document.getElementById("check");
const list = document.getElementById("check");
const uid = document.getElementById("uid");




// show password
function showpassword() {
  const confirmpassword = document.getElementById("confirmpassword");
  const eye = document.getElementById("eye");
  if (password.type === "password") {
    password.type = "text";
    confirmpassword.type = "text";
    eye.className = "fa-solid fa-eye-slash";
  } else {
    password.type = "password";
    confirmpassword.type = "password";
    eye.className = "fa-solid fa-eye";
  }
}
eye.addEventListener("click", showpassword);



// regular Expression
const validater = [
  { Regex: /.{8,}/ },
  { Regex: /[a-z]/ },
  { Regex: /[A-Z]/ },
  { Regex: /[0-9]/ },
  { Regex: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/ },
];

function newFunction() {
  const password = document.getElementById("password-input");

  const list = document.querySelectorAll(".list");
  validater.forEach((item, index) => {
    let isvalid = item.Regex.test(password.value);
    if (isvalid) {
      list[index].classList.add('list-check');
    } else {
      list[index].classList.remove('list-check');
    }
  });
}
password.addEventListener("keyup", newFunction);



// matching password and form submit
submit.addEventListener("click", function (event) {
  if (!uid.value.length > 0){
    error.innerHTML = "Enter User ID"
    event.preventDefault();
  }
  else if (password.value.length > 0 ) {
    
    function validate(event) {
      const list = document.querySelectorAll(".list");
      let allChecked = true;
      list.forEach(item => {
        if (!item.classList.contains('list-check')) {
          allChecked = false;
        }
      });
      if (!allChecked) {
        error.innerHTML = "Password does not meet the requirements";
        event.preventDefault();
      } else if (password.value !== confirmpassword.value) {
        error.innerHTML = "Password and Confirm Password are not matching";
        event.preventDefault();
      } else {
        alert("log in successfully ")}
      }
    
    validate(event);

  } else {
    error.innerHTML = "Password is required";
    event.preventDefault();
  }
});

// ===========================
// SOM ACADEMY LOGIN SYSTEM
// ===========================

// Show / Hide Password

const eye = document.getElementById("eye");
const password = document.getElementById("password");

eye.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");

    } else {

        password.type = "password";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");

    }

});


// Users

const users = [

{
email:"admin@somacademy.com",
password:"admin123",
role:"Admin"
},

{
email:"teacher@somacademy.com",
password:"teacher123",
role:"Teacher"
},

{
email:"student@somacademy.com",
password:"student123",
role:"Student"
},

{
email:"parent@somacademy.com",
password:"parent123",
role:"Parent"
}

];


// Login

document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault();

let email=document.getElementById("email").value.trim();

let pass=document.getElementById("password").value.trim();

let role=document.getElementById("role").value;

let message=document.getElementById("message");


let user=users.find(u=>

u.email===email &&

u.password===pass &&

u.role===role

);


if(user){

message.style.color="green";
message.innerHTML="Login Successful...";

setTimeout(()=>{

if(role==="Admin"){

window.location.href="admin/dashboard.html";

}

else if(role==="Teacher"){

window.location.href="teacher/dashboard.html";

}

else if(role==="Student"){

window.location.href="student/dashboard.html";

}

else if(role==="Parent"){

window.location.href="parent/dashboard.html";

}

},1000);

}

else{

message.style.color="red";
message.innerHTML="❌ Email, Password ama Role waa khaldan yihiin.";

}

});
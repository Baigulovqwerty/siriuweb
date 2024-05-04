


document.getElementById("input_btn").addEventListener("click", signup);
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";



function signup(){
    const email = document.getElementById("mail_input").value;
    const pass = document.getElementById("pass_input").value;
    // alert("message send to " + email);
    // alert(localStorage.getItem("isauth"))
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        localStorage.setItem("isauth", "true");
        localStorage.setItem("uid", user.uid);
        localStorage.setItem("mail", user.email);
        localStorage.setItem("basket", JSON.stringify({}));
        localStorage.setItem("bscost", 0);
        window.location.href = '/profile.html';
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error, errorCode, errorMessage);
        const target = document.getElementById("alertDiv");
        target.style.display = "block";
        target.innerHTML = errorMessage;
        target.style.opacity = 1;
        setTimeout(function(){target.style.opacity = 0}, 1000);
        setTimeout(function(){target.style.display = "none"}, 2000);
        });
}
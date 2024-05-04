

import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";




document.getElementById("input_btn").addEventListener("click", log_in);

function log_in () {
	const auth = getAuth();
	const email = document.getElementById("mail_input").value;
	const pass = document.getElementById("pass_input").value;

	signInWithEmailAndPassword(auth, email, pass)
	.then((userCredential) => {
		// Signed in 
		const user = userCredential.user;
		console.log(user);
		localStorage.setItem("isauth", "true");
		localStorage.setItem("uid", user.uid);
		localStorage.setItem("mail", user.email);
		localStorage.setItem("basket", JSON.stringify({}));
		localStorage.setItem("bscost", 0);
		window.location.href = 'profile.html';
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(error);
		const target = document.getElementById("alertDiv");
		target.style.display = "block";
		target.innerHTML = errorMessage;
		target.style.opacity = 1;
		setTimeout(function(){target.style.opacity = 0}, 1000);
		setTimeout(function(){target.style.display = "none"}, 2000);
	});
}

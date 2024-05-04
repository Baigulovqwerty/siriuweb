if(localStorage.getItem("isauth") == "true"){
    document.getElementsByClassName("not-signed")[0].style.display = 'none';
    document.getElementsByClassName("not-signed")[1].style.display = 'none';
    document.getElementsByClassName("name")[0].innerHTML = localStorage.getItem("mail");
}else{
    document.getElementsByClassName("signed")[0].style.display = 'none';
}


import { getAuth, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
document.getElementById("signout").addEventListener("click", sign_out);
const auth = getAuth();



function sign_out(){
    signOut(auth).then(() => {
        localStorage.setItem("isauth", "false");
        localStorage.removeItem("uid");
      }).catch((error) => {
        // An error happened.
      });
      window.location.reload();
}


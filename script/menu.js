import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyA7O1oX_iH9QIZXFU9IRn9iO57g-f_n0uM",
    authDomain: "sirius-6b2b4.firebaseapp.com",
    databaseURL: "https://sirius-6b2b4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sirius-6b2b4",
    storageBucket: "sirius-6b2b4.appspot.com",
    messagingSenderId: "376848856283",
    appId: "1:376848856283:web:6f68500f23727b3ac2c8fe",
measurementId: "G-FRYKTTYWRC"
};

const app = initializeApp(firebaseConfig);
// import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

let now = new Date()
console.log(now.getHours(), now.getMinutes());

// let p = document.getElementsByClassName("item")[0];
// let p_prime = p.cloneNode(true);
// document.getElementsByClassName("menu_body")[0].appendChild(p_prime);


// const db = getDatabase();
// const menu = ref(db, 'goods/');
// onValue(menu, (snapshot) => {
//     console.log(snapshot.val());
//     var goods = [];
//     let p = document.getElementsByClassName("item")[0];
//     for (const i in snapshot.val()){
//         console.log(i);
//         let qw = p.cloneNode(true)
//         document.getElementsByClassName("menu_body")[0].appendChild(qw);
//         // qw.firstChild.firstChild.innerHTML = i;
//         console.log("first child ooooooooo");
//         console.log(qw.firstChild.firstChild);
//         qw.firstChild.firstChild.innerHTML =  i;
//         console.log(qw.lastChild);
//         console.log(qw);
//         goods.push(qw);
//     }
//     p.style.display = "none";
// });


// for (let i in document.getElementsByClassName("minus")){
//     console.log(i);
// }


let basket = JSON.parse(localStorage.getItem("basket"));
let items = document.getElementsByClassName("item");
console.log(document.getElementsByClassName("item"));
for (let i = 0; i < items.length; i++){
    console.log(items[i].children[0].children[0].innerHTML);
    if (items[i].children[0].children[0].innerHTML in basket){
        items[i].children[0].children[1].children[1].value = basket[items[i].children[0].children[0].innerHTML];
        console.log(items[i].children[0].children[1].children[1]);
        console.log(basket[items[i].children[0].children[0].innerHTML]);
    }
}
console.log(basket);


function minus(i){
    let item_elem = i.target.parentElement.parentElement.parentElement;
    let input_item = i.target.parentElement.children[1];
    let count = parseInt(input_item.value);
    let good = item_elem.children[0].children[0].innerHTML;
    let bscost = parseInt(localStorage.getItem("bscost"));
    let cost = parseInt(item_elem.children[1].innerHTML);
    if (count > 0){
        count = count - 1;
        bscost = bscost - cost;
    }
    input_item.value = count;
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket[good] = count;
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("bscost", bscost);
}

function plus(i){
    let item_elem = i.target.parentElement.parentElement.parentElement;
    let input_item = i.target.parentElement.children[1];
    let count = parseInt(input_item.value);
    let good = item_elem.children[0].children[0].innerHTML;
    let bscost = parseInt(localStorage.getItem("bscost"));
    let cost = parseInt(item_elem.children[1].innerHTML);
    count = count + 1;
    bscost = bscost + cost;
    input_item.value = count;
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket[good] = count;
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("bscost", bscost);
}

let minuses = document.getElementsByClassName("minus")
let plusses = document.getElementsByClassName("plus")
for (let i = 0; i < minuses.length; i++){
    minuses[i].addEventListener("click", minus, i);
}
for (let i = 0; i < plusses.length; i++){
    plusses[i].addEventListener("click", plus, i);
}

import { getAuth, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
const auth = getAuth();


var goods = [];
let p = document.getElementsByClassName("item")[0];
let basket = JSON.parse(localStorage.getItem("basket"));
let i;
// const prices = {
//     ""
// }
let o = false
for (i in basket){
    if (basket[i] > 0){
        let qw = p.cloneNode(true);
        o = true;
        document.getElementsByClassName("menu_body")[0].appendChild(qw);
        qw.firstChild.firstChild.innerHTML =  i;
    }
}
localStorage.setItem("bsempt", true);
if (o == true){
    localStorage.setItem("bsempt", false);
}
p.remove();

let items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++){
    if (items[i].children[0].children[0].innerHTML in basket){
        items[i].children[0].children[1].children[1].value = basket[items[i].children[0].children[0].innerHTML];
    }else{

    }
}
function rel(){
    console.log(document.getElementsByClassName("menu_body").children != undefined);
    let basket = JSON.parse(localStorage.getItem("basket"));
    let i;
    let o = false
    for (i in basket){
        if (basket[i] > 0){
            o = true;
            break;
        }
    }
    localStorage.setItem("bsempt", true);
    if (o == true){
        localStorage.setItem("bsempt", false);
    }
    if (localStorage.getItem("bsempt") == "true"){
        document.getElementsByClassName("label_text")[1].innerHTML = "";
        document.getElementsByClassName("label_text")[0].innerHTML = "Корзина пуста";
        document.getElementsByClassName("menu_body")[0].style.display = "none";
        document.getElementsByClassName("order_btn")[0].disabled = true;
    }else{
        document.getElementsByClassName("label_text")[1].innerHTML = localStorage.getItem("bscost") + " р";
    }
}
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
    if (count > 0){
        input_item.value = count;
        let basket = JSON.parse(localStorage.getItem("basket"));
        basket[good] = count;
        localStorage.setItem("basket", JSON.stringify(basket));
        localStorage.setItem("bscost", bscost);
        rel();
    }else{
        let basket = JSON.parse(localStorage.getItem("basket"));
        console.log(basket);
        delete basket[good];
        console.log(basket);
        localStorage.setItem("basket", JSON.stringify(basket));
        localStorage.setItem("bscost", bscost);
        item_elem.remove();
    }
    rel();
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
    rel();
}

let minuses = document.getElementsByClassName("minus")
let plusses = document.getElementsByClassName("plus")
for (let i = 0; i < minuses.length; i++){
    minuses[i].addEventListener("click", minus, i);
}
for (let i = 0; i < plusses.length; i++){
    plusses[i].addEventListener("click", plus, i);
}

function order(){
    const target = document.getElementById("alertDiv");
    target.style.display = "block";
    target.style.opacity = 1;
    setTimeout(function(){target.style.opacity = 0}, 1000);
    setTimeout(function(){target.style.display = "none"}, 2000);
    localStorage.setItem("basket", JSON.stringify({}));
    localStorage.setItem("bscost", 0);
    rel();
}

document.getElementsByClassName("order_btn")[0].addEventListener("click", order);

rel();
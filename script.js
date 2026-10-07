let increase = document.getElementById("increase_counter");
let reset = document.getElementById("reset_counter");
let decrease = document.getElementById("decrease_counter");
let num = document.getElementById("number_counter");
let count;
let switchh = document.getElementById("switch_theme");
let body = document.getElementById("bodyy");
count = 0





increase.onclick = function () {
    count = count + 1;
    num.textContent = count;
}


decrease.onclick = function () {
    count = count - 1;
    num.textContent = count;
}



reset.onclick = function () {
    count = 0 ;
    num.textContent = count;
}


switchh.onclick = function () {
    body.style.backgroundColor ="#0f0f0f"
}










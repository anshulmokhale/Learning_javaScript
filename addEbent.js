let btn = document.getElementById("btn");

let head = document.querySelector("h1");

function change() {
    head.innerHTML = "This is changed!!!!";
    btn.style.background = "red";
}

btn.addEventListener('click', change);

btn.addEventListener('mouseover', function () {
    btn.style.color = "blue";
})
btn.addEventListener('mouseout', function () {
    btn.style.color = "black";
})
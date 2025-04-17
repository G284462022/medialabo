let btn = document.querySelector("button#calc");
btn.addEventListener("click", keisan);
let kotae = document.querySelector("span#answer");

function keisan(){
    let left = document.querySelector("input[name=left]");
    let x = Number(left.value);
    let right = document.querySelector("input[name=right]");
    let y = Number(right.value);
    kotae.textContent = x + y;
  }
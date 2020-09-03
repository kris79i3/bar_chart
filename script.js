"use strict";
window.addEventListener("DOMContentLoaded", start);

let arr = Array.from({ length: 40 }, () => Math.floor(Math.random() * 32));
console.log(arr);

const allBars = document.querySelectorAll(".bar");

function start() {
  const queueSize = Math.floor(Math.random() * 32);

  setTimeout(start, 1000);
  arr.shift();
  arr.push(queueSize);
  console.log(arr);
  height();
}

function height() {
  for (let i = 0; i < 40; i++) {
    allBars[i].style.height = arr[i] + "vw";
  }
}

"use strict";

const button = document.getElementById("hello");
const button2 = document.getElementById("goodbye");
const text = document.getElementById("text");
button.addEventListener("click", function () {
  text.textContent = "Welcome to our website";
});
button2.addEventListener("click", function () {
  text.textContent = "Goodbye and thank you.";
});

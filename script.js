// script.js

// ============================
// Example 1: Scope Demonstration
// ============================
function scopeDemo() {
  let localVar = "I exist only inside this function!";
  console.log(localVar);
}
scopeDemo();
// console.log(localVar); // ❌ Would throw an error (function scope)

// ============================
// Example 2: Function with Parameters and Return Value
// ============================
function addNumbers(a, b) {
  return a + b; // returns the sum
}

// Handle button click to calculate sum
document.getElementById("calcBtn").addEventListener("click", function() {
  let n1 = parseInt(document.getElementById("num1").value);
  let n2 = parseInt(document.getElementById("num2").value);
  let sum = addNumbers(n1, n2); // call function with parameters
  document.getElementById("result").innerText = "Sum: " + sum;
});

// ============================
// Example 3: Animation Trigger
// ============================
let box = document.getElementById("box");
let btn = document.getElementById("animateBtn");

// Toggle transition/animation class on button click
btn.addEventListener("click", function() {
  box.classList.toggle("animate"); // toggles smooth transition

  // also trigger bounce keyframe animation if active
  if (!box.classList.contains("bouncing")) {
    box.classList.add("bouncing");
  } else {
    box.classList.remove("bouncing");
  }
});

"use strict";

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input");
const submissionBtn = document.getElementById("submission-btn");
const responseEl = document.getElementById("response");

// create a mutable variable called age and do not assign it a value.
let age;

function checkAgeAndRespond() {
  age = parseInt(ageInputEl.value);

  // Write your code below
  if (age >= 21) {
    responseEl.innerText = "You can vote and purchase alcohol.";
  } else if (age >= 18) {
    responseEl.innerText = "You can vote, but you cannot purchase alcohol.";
  } else if (age >= 17) {
    responseEl.innerHTML =
      "You cannot vote or purchase alcohol, but you <em>can</em> join the Army.<br />" +
      '<a class="text-link" target="_blank" href="https://www.youtube.com/watch?v=w9pePpxU58M">Yeah, that makes sense.</a>';
  } else {
    responseEl.innerText = "You cannot vote and you cannot purchase alcohol.";
  }
}

submissionBtn.addEventListener("click", function () {
  checkAgeAndRespond();
});


/* this bit prevents the user from entering negative numbers or
   scientific notation. I didn't even know <input type="number">
   could take scientific notation! 😯 */
function validateInput(event) {
  const invalidCharacters = ["e", "E", "-", "+"];
  if (invalidCharacters.includes(event.key)) {
    event.preventDefault();
  }
}
ageInputEl.addEventListener("keydown", validateInput);

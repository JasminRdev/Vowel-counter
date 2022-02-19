
window.addEventListener("load" , () => {
const form = document.querySelector("#form");
const input_1 = document.querySelector("#input");
const end_result = document.querySelector("#counted");

form.addEventListener("submit" , (e) => {
e.preventDefault();

const value_of_input = input_1.value;
if(!value_of_input) {
    alert("Please fill out the input");
    return;
} else {
function getVow() {

let result = value_of_input.match(/[aeiou]/gi);
end_result.classList.add("vowel");
//ternary operator
result === null ? 0 : result.length;

result.cla
//setting html to counted vowel
end_result.innerHTML = "Your input includes: " + result.length + " Vowel(s) <br> (" + value_of_input + " => " + result + ")";
}
 getVow();

form.reset();
}
});
});
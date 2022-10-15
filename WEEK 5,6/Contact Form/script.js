const button = document.querySelector("#contact-submit");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const textareaInput = document.querySelector("#textarea");
// const toggle = document.querySelector(".toggles");
const paragraph = document.querySelector("p");
const validation = document.querySelector("div");


button, addEventListener("click", function () {

    if (nameInput.value === true) {
        const label = document.createElement("span");
        label.innerText = `${nameInput.value}`;
        paragraph.append(label);
        // validation.classList.toggle("toggle");
    }
})

button.addEventListener("click", function () {
    if (nameInput.value === "") {
        nameInput.style.borderColor = "red";
    } else nameInput.style.borderColor = "#aaa";

    if (emailInput.value === "") {
        emailInput.style.borderColor = "red";
    } else emailInput.style.borderColor = "#aaa";

    if (textareaInput.value === "") {
        textareaInput.style.borderColor = "red";
    } else textareaInput.style.borderColor = "#aaa";
})


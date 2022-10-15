const name = prompt("What is your name?");
const gender = prompt("What is your gender?");
const height = parseInt(prompt("What is your height in cm?"));
const weight = parseInt(prompt("What is your weight in kg?"));

let bmi = weight / ((height * height) / 10000);
let bmiIndex = "";

if (bmi < 18.5) {
    bmiIndex = "Underweight"
} else if (bmi >= 18.5 && bmi < 25) {
    bmiIndex = "Normal"
} else if (bmi >= 25 && bmi < 30) {
    bmiIndex = "Overweight"
} else (bmi >= 30)
bmiIndex = "Obese"


console.log(`${name}| ${gender[0].toUpperCase()} | BMI: ${bmi} | ${bmiIndex}`)


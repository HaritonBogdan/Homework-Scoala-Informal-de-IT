const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7];
let max = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max);
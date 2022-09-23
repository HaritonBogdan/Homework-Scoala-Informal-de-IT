const numbers = [1, 2, 3, 7, 5, 6, 7, 8, 9, 10, 9, 8, 7]
let target = 7;
let counter = 0;
for (let nums of numbers) {
    if (nums === target) {
        counter++;
    }
}

console.log(counter);

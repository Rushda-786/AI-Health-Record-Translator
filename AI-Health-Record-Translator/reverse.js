
let str = "Hello";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
}

console.log("Reverse =", reverse);
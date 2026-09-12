let str = "madam";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
}

if (str === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}
import { sum } from "./sum.js";

console.log(sum(3, 4));
document.getElementById("button").addEventListener("click", () => {
    const result = sum(4, 5);

    document.getElementById("result").innerHTML = `Sum of 4 & 5 = ${result}`;

})
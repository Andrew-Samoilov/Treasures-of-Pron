function pron(inputX, inputY) {
  let diagN = inputY + (inputX - 1);
  return (Math.pow(diagN,2) - (Math.pow(diagN,2) - diagN) / 2) - inputX + 1;
}

console.log(`Вхідні: x 10, y 5`);
console.log(pron(10, 5)); // -> 96
console.log(`Вхідні: x 2, y 3`);
console.log(pron(2, 3)); // -> 9

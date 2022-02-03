function pron(inputX, inputY) {
  // фактично остаточна версія з коментами і 
  // візуально зрозумілими змінними
  console.log(`Вхідні: x ${inputX}, y ${inputY}`);
  // номер дагоналі
  let diagN = inputY + (inputX - 1);
  console.log(`№ діагональки ${diagN}`);
  //   кількість елементів в заповненій частині матриці.
  //   про те, що Math.pow працює швидше - знаю, і він це стандартна ліба, 
  //   вирішив так залишити для більшої візуальної зрозумілості
  let diagCount = diagN * diagN - (diagN * diagN - diagN) / 2;
  console.log(`К-ть елементів ${diagCount}`);
  //   визначаємо наскільки елемент відстає від останнього
  let num = diagCount - inputX + 1;
  return num;
}

console.log(pron(10, 5)); // -> 96
console.log(pron(2, 3)); // -> 9

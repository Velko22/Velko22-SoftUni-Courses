function sumEvenAndOddDigits(number) {
    let evenSum = 0;
    let oddSum = 0;
  
    while (number > 0) {
      const digit = number % 10;
      if (digit % 2 === 0) {
        evenSum += digit;
      } else {
        oddSum += digit;
      }
      number = Math.floor(number / 10);
    }
  
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
  }
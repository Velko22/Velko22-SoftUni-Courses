function isPerfectNumber(number) {
    let divisorsSum = 0;
    for (let i = 1; i <= number / 2; i++) {
      if (number % i === 0) {
        divisorsSum += i;
      }
    }
  
    if (divisorsSum === number) {
      console.log("We have a perfect number!");
    } else {
      console.log("It's not so perfect.");
    }
  }
  
  // Example usage:
  isPerfectNumber(6);
  isPerfectNumber(28);
  isPerfectNumber(1236498);
  
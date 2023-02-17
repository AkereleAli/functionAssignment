function calculateSupply(age, amountPerDay) {
    const maxAge = 80; // Assuming max age to be 80
    const amountPerYear = amountPerDay * 365.25; // Considering leap year
    const amountTillMaxAge = (maxAge - age) * amountPerYear;
    console.log(`You will need ${amountTillMaxAge} to last you until the ripe old age of ${maxAge}`);
  }
  
  calculateSupply(30, 2.5);
  calculateSupply(50, 1.8);
  calculateSupply(20, 3);
function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference}.`);
  }
  
  function calcArea(radius) {
    const area = Math.PI * radius ** 2;
    console.log(`The area is ${area}.`);
  }
  
  calcCircumference(5);
  calcArea(3);
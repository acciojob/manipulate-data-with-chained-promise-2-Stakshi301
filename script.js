function getNumbers() {
  // Returns a promise that resolves with an array of numbers immediately
  return Promise.resolve([1, 2, 3, 4]);
}

getNumbers()
  .then((numbers) => {
    // First promise: filter out odd numbers after 3 seconds
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        document.getElementById("output").textContent = evenNumbers.join(", ");
        resolve(evenNumbers);
      }, 3000); // Delay of 3 seconds
    });
  })
  .then((evenNumbers) => {
    // Second promise: multiply even numbers by 2 after 1 second
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map((num) => num * 2);
        document.getElementById("output").textContent =
          multipliedNumbers.join(", ");
        resolve(multipliedNumbers);
      }, 1000); // Delay of 1 second
    });
  })
  .catch((err) => console.error(err));
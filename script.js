document.addEventListener("DOMContentLoaded", () => {
  const outputElement = document.getElementById("output");

  if (!outputElement) {
    console.error("Error: #output element not found in the DOM.");
    return;
  }

  // Continue with promise chaining logic
  getNumbers()
    .then((numbers) => {
      // First promise: filter out odd numbers after 3 seconds
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = numbers.filter((num) => num % 2 === 0);
          outputElement.textContent = evenNumbers.join(", ");
          resolve(evenNumbers);
        }, 3000);
      });
    })
    .then((evenNumbers) => {
      // Second promise: multiply even numbers by 2 after 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedNumbers = evenNumbers.map((num) => num * 2);
          outputElement.textContent = multipliedNumbers.join(", ");
          resolve(multipliedNumbers);
        }, 1000);
      });
    })
    .catch((err) => console.error("Error in promise chain:", err));
});

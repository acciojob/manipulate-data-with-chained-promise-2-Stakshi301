document.addEventListener("DOMContentLoaded", () => {
  const outputElement = document.getElementById("output");

  if (!outputElement) {
    console.error("Error: #output element not found in the DOM.");
    return;
  }

  // Function that returns a promise resolving with the initial array after 3 seconds
  function getNumbers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]);
      }, 3000);
    });
  }

  // Chain promises to process the array
  getNumbers()
    .then((numbers) => {
      // First transformation: filter out odd numbers
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = numbers.filter((num) => num % 2 === 0);
          outputElement.textContent = evenNumbers.join(", "); // Display even numbers
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((evenNumbers) => {
      // Second transformation: multiply even numbers by 2
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedNumbers = evenNumbers.map((num) => num * 2);
          outputElement.textContent = multipliedNumbers.join(", "); // Display multiplied numbers
          resolve(multipliedNumbers);
        }, 2000);
      });
    })
    .catch((err) => {
      console.error("Error in promise chain:", err);
    });
});

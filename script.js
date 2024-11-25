document.addEventListener("DOMContentLoaded", () => {
  const outputElement = document.getElementById("output");

  // Function that returns a promise resolving with the initial array
  function getNumbers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]); // Simulate fetching the array
      }, 1000); // Reduced delay to 1 second
    });
  }

  // Chain promises to process the array
  getNumbers()
    .then((numbers) => {
      // First transformation: filter out odd numbers
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = numbers.filter((num) => num % 2 === 0);
          outputElement.textContent = evenNumbers.join(", "); // Update with even numbers
          resolve(evenNumbers);
        }, 1000); // Reduced delay to 1 second
      });
    })
    .then((evenNumbers) => {
      // Second transformation: multiply even numbers by 2
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedNumbers = evenNumbers.map((num) => num * 2);
          outputElement.textContent = multipliedNumbers.join(", "); // Update with multiplied numbers
          resolve(multipliedNumbers);
        }, 1000); // Reduced delay to 1 second
      });
    })
    .catch((err) => {
      console.error("Error in promise chain:", err);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const outputElement = document.getElementById("output");

  // Function to return a promise that resolves with an array of numbers after 3 seconds
  function getNumbers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]); // Resolve with the initial array
      }, 3000); // Wait for 3 seconds
    });
  }

  // Function to handle the promise chain
  getNumbers()
    .then((numbers) => {
      // First promise: Filter out odd numbers and update the DOM after 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          const evendocument.addEventListener("DOMContentLoaded", () => {
  const outputElement = document.getElementById("output");

  // Function to return a promise that resolves with an array of numbers after 3 seconds
  function getNumbers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]); // Resolve with the initial array
      }, 3000); // Wait for 3 seconds
    });
  }

  // Function to handle the promise chain
  getNumbers()
    .then((numbers) => {
      // First promise: Filter out odd numbers and update the DOM after 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = numbers.filter((num) => num % 2 === 0);
          outputElement.textContent = `${evenNumbers.join(", ")}`; // Display even numbers
          resolve(evenNumbers); // Resolve with the even numbers
        }, 1000); // Delay of 1 second
      });
    })
    .then((evenNumbers) => {
      // Second promise: Multiply all even numbers by 2 and update the DOM after 2 seconds
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedNumbers = evenNumbers.map((num) => num * 2);
          outputElement.textContent = `${multipliedNumbers.join(", ")}`; // Display the result
          resolve(multipliedNumbers); // Resolve with the multiplied numbers
        }, 2000); // Delay of 2 seconds
      });
    })
    .catch((error) => {
      console.error("Error in promise chain:", error);
      outputElement.textContent = "An error occurred.";
    });
});
Numbers = numbers.filter((num) => num % 2 === 0);
 = "An error occurred.";
    });
});

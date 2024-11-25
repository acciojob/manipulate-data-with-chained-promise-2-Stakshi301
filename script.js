document.addEventListener("DOMContentLoaded", () => {
  const outputElement = document.getElementById("output"); // Correctly initialized

  // Ensure the promise functions and chaining are correct
  function getNumbers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]); // Proper initialization
      }, 3000); // Wait for 3 seconds
    });
  }

  // Continue with the promise chain
  getNumbers()
    .then((numbers) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = numbers.filter((num) => num % 2 === 0);
          outputElement.textContent = `${evenNumbers.join(", ")}`; // Display even numbers
          resolve(evenNumbers); // Resolve with the even numbers
        }, 1000); // Delay of 1 second
      });
    })
    .then((evenNumbers) => {
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

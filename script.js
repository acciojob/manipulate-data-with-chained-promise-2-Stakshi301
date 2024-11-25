document.addEventListener("DOMContentLoaded", () => {
  const outputElement = document.getElementById("output");

  if (!outputElement) {
    console.error("Error: #output element not found in the DOM.");
    return;
  }

  // Function to simulate getting an array of numbers after 3 seconds
  function getNumbers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]); // Resolve with the array
      }, 3000);
    });
  }

  // Chain the promises and update the output accordingly
  getNumbers()
    .then((numbers) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          // Filter out odd numbers
          const evenNumbers = numbers.filter((num) => num % 2 === 0);
          outputElement.textContent = `${evenNumbers.join(", ")}`; // Update the DOM with even numbers
          resolve(evenNumbers); // Pass the filtered even numbers to the next step
        }, 1000); // Delay for 1 second
      });
    })
    .then((evenNumbers) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          // Multiply each even number by 2
          const multipliedNumbers = evenNumbers.map((num) => num * 2);
          outputElement.textContent = `${multipliedNumbers.join(", ")}`; // Update the DOM with multiplied numbers
          resolve(multipliedNumbers); // Resolve with the final numbers
        }, 2000); // Delay for 2 seconds
      });
    })
    .catch((error) => {
      console.error("Error in promise chain:", error);
      outputElement.textContent = "An error occurred."; // Error handling
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const outputElement = document.getElementById("output");

  if (!outputElement) {
    console.error("Error: #output element not found in the DOM.");
    return;
  }

  function getNumbers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]);
      }, 3000);
    });
  }

  getNumbers()
    .then((numbers) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = numbers.filter((num) => num % 2 === 0);
          outputElement.textContent = evenNumbers.join(", ");
          resolve(evenNumbers);
        }, 1000); // First update after 1 second
      });
    })
    .then((evenNumbers) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedNumbers = evenNumbers.map((num) => num * 2);
          outputElement.textContent = multipliedNumbers.join(", ");
          resolve(multipliedNumbers);
        }, 2000); // Second update after 2 seconds
      });
    })
    .catch((error) => {
      console.error("Error in promise chain:", error);
      outputElement.textContent = "An error occurred.";
    });
});

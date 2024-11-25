document.addEventListener("DOMContentLoaded", () => {
  const outputElement = document.getElementById("output");

  if (!outputElement) {
    console.error("Error: #output element not found in the DOM.");
    return;
  }

  function getNumbers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Resolving numbers array");
        resolve([1, 2, 3, 4]);
      }, 3000);
    });
  }

  getNumbers()
    .then((numbers) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = numbers.filter((num) => num % 2 === 0);
          console.log("Filtered even numbers:", evenNumbers);
          outputElement.textContent = `${evenNumbers.join(", ")}`;
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((evenNumbers) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedNumbers = evenNumbers.map((num) => num * 2);
          console.log("Multiplied numbers:", multipliedNumbers);
          outputElement.textContent = `${multipliedNumbers.join(", ")}`;
          resolve(multipliedNumbers);
        }, 2000);
      });
    })
    .catch((error) => {
      console.error("Error in promise chain:", error);
      outputElement.textContent = "An error occurred.";
    });
});

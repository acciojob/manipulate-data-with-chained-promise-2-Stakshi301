document.addEventListener("DOMContentLoaded", () => {
  const outputElement = document.getElementById("output");

  function getNumbers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]); // Reduced delay
      }, 1000); // Reduced to 1 second
    });
  }

  getNumbers()
    .then((numbers) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = numbers.filter((num) => num % 2 === 0);
          outputElement.textContent = evenNumbers.join(", ");
          resolve(evenNumbers);
        }, 1000); // Reduced to 1 second
      });
    })
    .then((evenNumbers) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedNumbers = evenNumbers.map((num) => num * 2);
          outputElement.textContent = multipliedNumbers.join(", ");
          resolve(multipliedNumbers);
        }, 1000); // Reduced to 1 second
      });
    })
    .catch((err) => {
      console.error("Error in promise chain:", err);
    });
});

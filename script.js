document.addEventListener("DOMContentLoaded", () => {
  const outputElement = document.getElementById("output");

  // Function to simulate getting numbers
  function getNumbers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]); // Initial array
      }, 500); // Reduced timeout for testing
    });
  }

  // Promise chain to process array
  getNumbers()
    .then((numbers) => {
      console.log('Original Numbers:', numbers);  // Log original numbers
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = numbers.filter((num) => num % 2 === 0);
          console.log('Even Numbers:', evenNumbers);  // Log even numbers
          outputElement.textContent = evenNumbers.join(", ");  // Update with even numbers
          resolve(evenNumbers);
        }, 1000); // Reduced timeout for faster testing
      });
    })
    .then((evenNumbers) => {
      console.log('Even Numbers to Multiply:', evenNumbers);  // Log even numbers to multiply
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedNumbers = evenNumbers.map((num) => num * 2);
          console.log('Multiplied Numbers:', multipliedNumbers);  // Log multiplied numbers
          outputElement.textContent = multipliedNumbers.join(", ");  // Update with multiplied numbers
          resolve(multipliedNumbers);
        }, 1000); // Reduced timeout for faster testing
      });
    })
    .catch((err) => {
      console.error('Error in promise chain:', err);
    });
});

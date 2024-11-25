document.addEventListener("DOMContentLoaded", () => {
  const outputElement = document.getElementById("output");

  // Simulating the initial array of numbers
  function getNumbers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]); // Initial array
      }, 500); // Reduced timeout for testing
    });
  }

  // Start processing the array using promise chaining
  getNumbers()
    .then((numbers) => {
      console.log('Original Numbers:', numbers);  // Log the original array
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = numbers.filter((num) => num % 2 === 0);
          console.log('Even Numbers:', evenNumbers);  // Log even numbers
          outputElement.textContent = evenNumbers.join(", ");  // Update the DOM with even numbers
          resolve(evenNumbers);
        }, 1000); // 1 second delay to filter even numbers
      });
    })
    .then((evenNumbers) => {
      console.log('Even Numbers to Multiply:', evenNumbers);  // Log even numbers before multiplying
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedNumbers = evenNumbers.map((num) => num * 2);
          console.log('Multiplied Numbers:', multipliedNumbers);  // Log the final multiplied numbers
          outputElement.textContent = multipliedNumbers.join(", ");  // Update the DOM with multiplied numbers
          resolve(multipliedNumbers);
        }, 2000); // 2 seconds delay to multiply numbers
      });
    })
    .catch((err) => {
      console.error('Error in promise chain:', err);
    });
});

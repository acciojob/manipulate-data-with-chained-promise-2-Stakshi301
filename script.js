 const manipulateArray = (arr) => {
            return new Promise((resolve) => {
              const outputDiv = document.getElementById('output');
          
              // Step 1: Filter out odd numbers after 1 second
              setTimeout(() => {
                const filteredArray = arr.filter(num => num % 2 === 0);
                outputDiv.innerHTML = `After filtering odd numbers: ${filteredArray}`;
                console.log('Step 1:', filteredArray);
          
                // Step 2: Multiply even numbers by 2 after another 1 second
                setTimeout(() => {
                  const multipliedArray = filteredArray.map(num => num * 2);
                  outputDiv.innerHTML = `After multiplying by 2: ${multipliedArray}`;
                  console.log('Step 2:', multipliedArray);
          
                  // Resolve the promise after a total of 3 seconds
                  resolve(multipliedArray);
                }, 1000); // 2nd step runs after 1 second from step 1
              }, 1000); // 1st step runs after 1 second
            });
          };
          
          // Input Array
          const array = [1, 2, 3, 4];
          
          // Call the function and handle the resolved promise
          manipulateArray(array).then((result) => {
            console.log('Promise resolved with:', result);
          });